$(cargarTablas);

let openRequestEntrada = indexedDB.open("entrada", 1);
let openRequestSalida = indexedDB.open("salida", 1);

let db;

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

    //guardar la hora, minutos y segundos
    let date = new Date();
    let hour = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

    let dni =  $('#dni').val()
    let nombre = $('#nom').val()
    let apellidos = $('#apell').val()
    let persCont = $("#persCont").val()
    let horaEntrada = hour

    $("#entrada").append(
        `<tr><td>${nombre}</td><td>${apellidos}</td><td>${dni}</td><td>${persCont}</td><td>${horaEntrada}</td><td><button onclick="ficharSalida(${dni})">Salida</button></tr>`
    );
}

function error(){
    console.log("error al insertar");
}

function exito(){
    console.log("exito al insertar");
}

function limpiar(){
}