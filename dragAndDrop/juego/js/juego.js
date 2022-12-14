$(principal);

function principal(){
    const t = $("#tablero");

    console.log(t);

    const letras = "kljasdhf";

    for (var i = 0; i < letras.length; i++) {
        t.append("<span id='arrastrable-"+i+"()' class='arrastrable' ondragstart='arrastrando()' draggable='true'>"+letras[i]+"</span>");
    }

    let p = document.getElementById("tablero")
}

function comprobar(){
    console.log("comprobar");
}