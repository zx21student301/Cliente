let openRequestEntrada = indexedDB.open("entrada", 1);
let openRequestSalida = indexedDB.open("salida", 1);

let dbE;
let dbS;

let correctoE = false;
let correctoS = false;

//funciones para ENTRADA
openRequestEntrada.onsuccess=function(){
    dbE = openRequestEntrada.result;
    correctoE = true;
};

openRequestEntrada.onerror=function(){
    console.log("Error al acceder a la base de datos");
};

openRequestEntrada.onupgradeneeded=function(){
    let dbE = openRequestEntrada.result;

      if (!dbE.objectStoreNames.contains('controlVisitas')){
          let entradaDB = dbE.createObjectStore("controlVisitas",{keyPath: 'dni'});
          let index = entradaDB.createIndex('apell_idx','apellidos');
      }
};

//funciones para SALIDA
openRequestSalida.onsuccess=function(){
  dbS = openRequestSalida.result;
  correctoS = true;

  if(correctoE & correctoS){
    cargarTablas();
  }
};

openRequestSalida.onerror=function(){
  console.log("Error al acceder a la base de datos");
};

openRequestSalida.onupgradeneeded=function(){
  let dbS = openRequestSalida.result;

    if (!dbS.objectStoreNames.contains('controlSalidas')){
        let salidaDB = dbS.createObjectStore("controlSalidas",{keyPath: 'dni'});
        let index = salidaDB.createIndex('apell_idx','apellidos');
    }
};

function cargarTablas(){
  //poner la fecha en el titulo
  let fechaActual = new Date();
  let formatFechaActual = fechaActual.getDate()+"/"+(fechaActual.getMonth()+1)+"/"+fechaActual.getFullYear();
  $("#fechaHoy").append(
    formatFechaActual
  )

  //cargar Tabla entradas
  //para poder leer la indexedDB se cambia el tipo de readwrite a readonly
  let trnsE = dbE.transaction("controlVisitas","readonly");

  let almacenValoresE = trnsE.objectStore("controlVisitas");

  let requestE = almacenValoresE.openCursor();

  // llamado por cada valor encontrado por el cursor
  requestE.onsuccess = function() {
    let cursor = requestE.result;
    if (cursor) {
      let key = cursor.key; // clave del objeto (el campo id)
      let value = cursor.value; // valor del objeto
        $("#entrada").append(
            `<tr><td>${value.nombre}</td><td>${value.apellidos}</td><td>${key}</td><td>${value.persCont}</td><td>${value.horaEntrada}</td><td><button onclick="ficharSalida('${key.toString()}')">Salida</button></td></tr>`
        );
      cursor.continue();
    } else {
      console.log("No hay más valores");
    }
  };

  //cargar Tabla salidas
  //para poder leer la indexedDB se cambia el tipo de readwrite a readonly
  let trnsS = dbS.transaction("controlSalidas","readonly");

  let almacenValoresS = trnsS.objectStore("controlSalidas");

  let requestS = almacenValoresS.openCursor();

  // llamado por cada valor encontrado por el cursor
  requestS.onsuccess = function() {
    let cursor = requestS.result;
    if (cursor) {
      let key = cursor.key; // clave del objeto (el campo id)
      let value = cursor.value; // valor del objeto
        $("#salida").append(
            `<tr><td>${value.nombre}</td><td>${value.apellidos}</td><td>${key}</td><td>${value.persCont}</td><td>${value.horaEntrada}</td><td>${value.horaSalida}</td></tr>`
        )
      cursor.continue();
    } else {
      console.log("No hay más valores");
    }
  };
}

function registrar() {
    let trns = dbE.transaction("controlVisitas", "readwrite");

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
    let res = almacenValores.add(miObjeto);

    res.onerror = function(){ alert("El DNI introducido ya está en uso") };
    res.onsuccess = function(){ limpiar(); rellenarTablaEntrada(); };
}

function rellenarTablaEntrada(){

  $("#entrada").empty();

  //para poder leer la indexedDB se cambia el tipo de readwrite a readonly
	let trns = dbE.transaction("controlVisitas","readonly");

	let almacenValores = trns.objectStore("controlVisitas");

	let request = almacenValores.openCursor();

	// llamado por cada valor encontrado por el cursor
	request.onsuccess = function() {
	  let cursor = request.result;
	  if (cursor) {
	    let key = cursor.key; // clave del objeto (el campo id)
	    let value = cursor.value; // valor del objeto
        $("#entrada").append(
            `<tr><td>${value.nombre}</td><td>${value.apellidos}</td><td>${key}</td><td>${value.persCont}</td><td>${value.horaEntrada}</td><td><button onclick="ficharSalida('${key.toString()}')">Salida</button></tr>`
        );
	    cursor.continue();
	  } else {
	    console.log("No hay más valores");
	  }
	};
}

function limpiar(){
    $('#dni').val("");
    $('#nom').val("");
    $('#apell').val("");
    $("#persCont").val("");
}

function ficharSalida(dni){
  //para poder leer la indexedDB se cambia el tipo de readwrite a readonly
	let trnsE = dbE.transaction("controlVisitas","readwrite");

	let almacenValoresE = trnsE.objectStore("controlVisitas");

	let request = almacenValoresE.get(dni.toString());

  //guardar la hora, minutos y segundos
  let date = new Date();
  let hour = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

	// llamado por cada valor encontrado por el cursor
	request.onsuccess = function() {
    let results = request.result
    
    let miObjeto = {
      dni: results.dni,
      nombre: results.nombre,
      apellidos: results.apellidos,
      persCont: results.persCont,
      horaEntrada: results.horaEntrada,
      horaSalida: hour
    }
    
    let del = almacenValoresE.delete(dni.toString());
    del.onsuccess = function(){rellenarTablaEntrada();};

    let trns = dbS.transaction("controlSalidas", "readwrite");

    //recuperamos el objectStore
    let almacenValores = trns.objectStore("controlSalidas");
  
    //insertamos en la base de datos
    let res = almacenValores.add(miObjeto);

    res.onerror = function(){ console.log(res.error) };
    res.onsuccess = function(){ rellenarTablaSalida();};
  }
}

function rellenarTablaSalida(){

  $("#salida").empty();

  //para poder leer la indexedDB se cambia el tipo de readwrite a readonly
  let trns = dbS.transaction("controlSalidas","readonly");

  let almacenValores = trns.objectStore("controlSalidas");

  let request = almacenValores.openCursor();

  // llamado por cada valor encontrado por el cursor
  request.onsuccess = function() {
    let cursor = request.result;
    if (cursor) {
      let key = cursor.key; // clave del objeto (el campo id)
      let value = cursor.value; // valor del objeto
        $("#salida").append(
            `<tr><td>${value.nombre}</td><td>${value.apellidos}</td><td>${key}</td><td>${value.persCont}</td><td>${value.horaEntrada}</td><td>${value.horaSalida}</td></tr>`
        );
      cursor.continue();
    } else {
      console.log("No hay más valores");
    }
  };
}

function buscarDNI(v){
  if(v == "e"){
    let filtro = $("#dniEntrada").val();

    $("#entrada").empty();

    if(filtro == ""){
      rellenarTablaEntrada();
    }else{
      //para poder leer la indexedDB se cambia el tipo de readwrite a readonly
      let trns = dbE.transaction("controlVisitas","readonly");

      let almacenValores = trns.objectStore("controlVisitas");

      let request = almacenValores.get(filtro);

      // llamado por cada valor encontrado por el cursor
      request.onsuccess = function() {
        let value = request.result
        console.log(value)
        if(value == undefined){
          $("#entrada").append(
            `<tr><td colspan='6'>No existen personas con ese DNI</td></tr>`
          );
        }else{
          $("#entrada").append(
            `<tr><td>${value.nombre}</td><td>${value.apellidos}</td><td>${value.dni}</td><td>${value.persCont}</td><td>${value.horaEntrada}</td><td><button onclick="ficharSalida('${value.dni.toString()}')">Salida</button></tr>`
          );
        }
      };
    }
  }else if(v == 's'){
    let filtro = $("#dniSalida").val();

    $("#salida").empty();

    if(filtro == ""){
      rellenarTablaSalida();
    }else{
      //para poder leer la indexedDB se cambia el tipo de readwrite a readonly
      let trns = dbS.transaction("controlSalidas","readonly");

      let almacenValores = trns.objectStore("controlSalidas");

      let request = almacenValores.get(filtro);

      // llamado por cada valor encontrado por el cursor
      request.onsuccess = function() {
        let value = request.result
        console.log(value)
        if(value == undefined){
          $("#salida").append(
            `<tr><td colspan='6'>No existen personas con ese DNI</td></tr>`
          );
        }else{
          $("#salida").append(
            `<tr><td>${value.nombre}</td><td>${value.apellidos}</td><td>${value.dni}</td><td>${value.persCont}</td><td>${value.horaEntrada}</td><td>${value.horaSalida}</td></tr>`
          );
        }
      };
    }
  }
}

function buscarApell(v){
  if(v == "e"){
    let filtro = $("#apellEntrada").val();

    $("#entrada").empty();

    if(filtro == ""){
      rellenarTablaEntrada();
    }else{
      //para poder leer la indexedDB se cambia el tipo de readwrite a readonly
      let trns = dbE.transaction("controlVisitas","readonly");

      let almacenValores = trns.objectStore("controlVisitas");

      let index_apell = almacenValores.index('apell_idx');

      let request = index_apell.getAll(filtro);

      request.onsuccess = function(){
        let cursor = request.result;
        if (cursor == ""){
          $("#entrada").append(
            `<tr><td colspan='6'>No existen personas con ese apellido</td></tr>`
          );
        }else{
          for (let i = 0; i < cursor.length; i++) {
            $("#entrada").append(
              `<tr><td>${cursor[i].nombre}</td><td>${cursor[i].apellidos}</td><td>${cursor[i].dni}</td><td>${cursor[i].persCont}</td><td>${cursor[i].horaEntrada}</td><td><button onclick="ficharSalida('${cursor[i].dni.toString()}')">Salida</button></tr>`
            );  
          }
        }
      }
    }
  }else if(v == "s"){
    let filtro = $("#apellSalida").val();

    $("#salida").empty();

    if(filtro == ""){
      rellenarTablasalida();
    }else{
      //para poder leer la indexedDB se cambia el tipo de readwrite a readonly
      let trns = dbS.transaction("controlSalidas","readonly");

      let almacenValores = trns.objectStore("controlSalidas");

      let index_apell = almacenValores.index('apell_idx');

      let request = index_apell.getAll(filtro);

      request.onsuccess = function(){
        let cursor = request.result;
        if (cursor == ""){
          $("#salida").append(
            `<tr><td colspan='6'>No existen personas con ese apellido</td></tr>`
          );
        }else{
          for (let i = 0; i < cursor.length; i++) {
            $("#salida").append(
              `<tr><td>${cursor[i].nombre}</td><td>${cursor[i].apellidos}</td><td>${cursor[i].dni}</td><td>${cursor[i].persCont}</td><td>${cursor[i].horaEntrada}</td><td>${cursor[i].horaSalida}</td></tr>`
            );  
          }
        }
      }
    }
  }
}