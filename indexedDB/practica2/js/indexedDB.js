let openRequest = indexedDB.open("objetos", 1);

let db;

openRequest.onsuccess=function(){
    db = openRequest.result;
};

openRequest.onerror=function(){
    console.log("Error al acceder a la base de datos");
};

openRequest.onupgradeneeded=function(){
    let db = openRequest.result;

      if (!db.objectStoreNames.contains('almacenObjetos')){
          db.createObjectStore("almacenObjetos",{keyPath: 'id'});
      }
};

function guardar() {
    let trns = db.transaction("almacenObjetos", "readwrite");

    //recuperamos el objectStore
    let almacenValores = trns.objectStore("almacenObjetos");

    //Recuperamos el valor del input
    let miObjeto = {
        id: $('#valor1').val(),
        val2: $('#valor2').val(),
        val3: $('#valor3').val()
    }
   
    //insertamos en la base de datos
    let res = almacenValores.put(miObjeto);

    res.onerror = function(){ error() };
    res.onsuccess = function(){ exito() };
}

function error(){
    console.log("error al insertar");
}

function exito(){
    console.log("exito al insertar");
}

function listar(){
    let trns = db.transaction("almacenObjetos");
    let almacenValores = trns.objectStore("almacenObjetos");

    //abrimos un cursor
    let request = almacenValores.openCursor();

    //si el cursor se abre con exito
    request.onsuccess = function() {
        //recuperamos un objeto cursor que apunta a la primera fila
          let cursor = request.result;

          if (cursor) { //el cursor es false si apunta a "nada"
            let clave = cursor.key; //recuperar la clave
            let valor = cursor.value; //recuperar el valor
            let salida = "";
            for(v in valor){
                salida += valor[v]+":";
            }
            $('#datos').append("<tr><td>"+clave+"</td><td>"+salida+"</td></tr>");
            cursor.continue();
          } else {
            console.log("No hay más resultados");
          }
    };    
}