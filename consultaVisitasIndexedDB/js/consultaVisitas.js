$(cargarTablas);

let openRequestEntrada = indexedDB.open("entrada", 1);
let openRequestSalida = indexedDB.open("salida", 1);

let db;

function cargarTablas(){
    //cargar Tabla entradas
    //para poder leer la indexedDB se cambia el tipo de readwrite a readonly
	let trns = db.transaction("controlVisitas","readonly");

	let almacenValores = trns.objectStore("controlVisitas");

	let request = almacenValores.openCursor();

	// llamado por cada valor encontrado por el cursor
	request.onsuccess = function() {
	  let cursor = request.result;
	  if (cursor) {
	    let key = cursor.key; // clave del objeto (el campo id)
	    let value = cursor.value; // valor del objeto
        $("#entrada").append(
            `<tr><td>${value.nombre}</td><td>${value.apellidos}</td><td>${key}</td><td>${value.persCont}</td><td>${value.horaEntrada}</td><td><button onclick="ficharSalida(${key})">Salida</button></tr>`
        );
	    cursor.continue();
	  } else {
	    console.log("No hay más valores");
	  }
	};
}

//funciones apartado ENTRADA
openRequestEntrada.onsuccess=function(){
    db = openRequestEntrada.result;
};

openRequestEntrada.onerror=function(){
    console.log("Error al acceder a la base de datos");
};

openRequestEntrada.onupgradeneeded=function(){
    let db = openRequestEntrada.result;

      if (!db.objectStoreNames.contains('controlVisitas')){
          db.createObjectStore("controlVisitas",{keyPath: 'dni'});
      }
};

function registrar() {
    let trns = db.transaction("controlVisitas", "readwrite");

    //guardar la hora, minutos y segundos
    let date = new Date();
    let hour = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

    //recuperamos el objectStore
    let almacenValores = trns.objectStore("controlVisitas");

    //Recuperamos el valor del input
    let miObjeto = {
        dni: $('#dni').val(),
        nombre: $('#nom').val(),
        apellidos: $('#apell').val(),
        persCont: $("#persCont").val(),
        horaEntrada: hour
    }
   
    //insertamos en la base de datos
    let res = almacenValores.put(miObjeto);

    res.onerror = function(){ error() };
    res.onsuccess = function(){ exito() };

    rellenarTabla();
}

function rellenarTabla(){

    $("#entrada").empty();

    //para poder leer la indexedDB se cambia el tipo de readwrite a readonly
	let trns = db.transaction("controlVisitas","readonly");

	let almacenValores = trns.objectStore("controlVisitas");

	let request = almacenValores.openCursor();

	// llamado por cada valor encontrado por el cursor
	request.onsuccess = function() {
	  let cursor = request.result;
	  if (cursor) {
	    let key = cursor.key; // clave del objeto (el campo id)
	    let value = cursor.value; // valor del objeto
        $("#entrada").append(
            `<tr><td>${value.nombre}</td><td>${value.apellidos}</td><td>${key}</td><td>${value.persCont}</td><td>${value.horaEntrada}</td><td><button onclick="ficharSalida(${dni})">Salida</button></tr>`
        );
	    cursor.continue();
	  } else {
	    console.log("No hay más valores");
	  }
	};
}

function error(){
    console.log("error al insertar");
}

function exito(){
    console.log("exito al insertar");
}

function limpiar(){
    $('#dni').val("");
    $('#nom').val("");
    $('#apell').val("");
    $("#persCont").val("");
}