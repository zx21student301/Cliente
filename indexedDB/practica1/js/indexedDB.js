let openRequest = indexedDB.open("valores", 2);

let db;

openRequest.onsuccess = function(){
	console.log("base de datos abierta con exito");

	db = openRequest.result;
}

openRequest.onerror = function(){
	console.log("base de datos abierta con ERROR");
}

openRequest.onupgradeneeded = function(evento){

	//se lanza asi:
	//no hay base de datos
	//o la base de datos actual es de version menor que la indicada arriba

	console.log("lanzado el evento on upgrade needed");

	//objeto para manejar las operaciones con la base de datos
	let db = openRequest.result;

	//comprobar que existe el ObjectStore datosFormulario
	//si no existe se crea
	if(!db.objectStoreNames.contains('datosFormulario')){
		db.createObjectStore("datosFormulario");
	}
}

function guardar(){
	let trns = db.transaction("datosFormulario","readwrite");

	let almacenValores = trns.objectStore("datosFormulario");

	let v1 = $("#valor1").val()

	let resultado = almacenValores.put(v1, "valor 1");

	resultado.onsuccess = function(){
		console.log("insertado con exito");
	}

	resultado.onerror = function(){
		console.log("error al insertar");
	}
	
}

function listar(){
	//para poder leer la indexedDB se cambia el tipo de readwrite a readonly
	let trns = db.transaction("datosFormulario","readonly");

	let almacenValores = trns.objectStore("datosFormulario");

	let request = almacenValores.openCursor();

	// llamado por cada valor encontrado por el cursor
	request.onsuccess = function() {
	  let cursor = request.result;
	  if (cursor) {
	    let key = cursor.key; // clave del objeto (el campo id)
	    let value = cursor.value; // valor del objeto
	    $("#datos").append("<tr><td>"+key+"</td><td>"+value+"</td></tr>")
	    cursor.continue();
	  } else {
	    console.log("No hay más valores");
	  }
	}; 

/*	let arrayKeys = almacenValores.getAllKeys();

	arrayKeys.onsuccess = function(){
		for (let k of arrayKeys.result){
			let req = almacenValores.get(k);
			req.onsuccess = function(){
				$("#datos").append("<tr><td>"+k+"</td><td>"+req.result+"</td></tr>")
			}
		}
	}
*/
}