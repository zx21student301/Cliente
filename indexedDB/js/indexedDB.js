let openRequest = indexedDB.open("valores", 2);

let db;

openRequest.onsuccess = function(){
	console.log("base de datos abierta con exito");

	db = openRequest.result;

	let trns = db.transaction("datosFormulario","readwrite");

	let almacenValores = trns.objectStore("datosFormulario");

	let datos = {
		val1 : $("#valor1").val(),
		val2 : $("#valor2").val(),
		val3 : $("#valor3").val()
	}

	let resultado = almacenValores.add(datos, 1);

	resultado.onsuccess = function(){
		console.log("insertado con exito");
	}

	resultado.onerror = function(){
		console.log("error al insertar");
	}
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

	if(evento.oldVersion != 1){
		db.createObjectStore("datosFormulario");
	}

	db.createObjectStore("datosFormulario1");
	db.createObjectStore("datosFormulario2");

	/*let db = openRequest.result;
	switch(evento.oldVersion) { //version de bd existente
		case 0:
			console.log("no hay base de datos");
			break;
		case 1:
			console.log("Base de datos en version 1");
			break;
		default:
			console.log("Version: "+evento.oldVersion);
			break;
	}*/
}