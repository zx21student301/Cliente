$(principal);

function principal(){
    const t = $("#tablero");
    console.log(t)

    const letras = "kljasdhf";

    for (var i = 0; i < letras.length; i++) {
        t.append("<span id='arrastrable-"+i+"' class='arrastrable' ondragstart='arrastrando()' draggable='true' ondragover='llegada()' ondrop='solto()'>"+letras[i]+"</span>");
    }
}

function comprobar(){
    let text = document.getElementsByClassName("arrastrable");
    let l = [];

    for (var i = 0; i < text.length ; i++) {
        let pos = document.getElementById("arrastrable-"+i).innerHTML;
        l.push(pos);
    }

    for (var i = 0; i < l.length; i++) {
        if(l[i] < l[i-1]){
            alert("No está ordenado");
            break;
        }else{
            alert("Está ordenado");
            break;
        }
    }
}

function arrastrando(){
    event.dataTransfer.setData('text/plain', event.target.id);
}

function llegada(){
    event.preventDefault();
}

function solto(){
    console.log("soltó");
    const id = event.dataTransfer.getData('text');

    const elementoArrastrado = document.getElementById(id);
    const destino = document.getElementById("tablero");

    destino.appendChild(elementoArrastrado);

    event.dataTransfer.cleanData;
}