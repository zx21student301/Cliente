$(principal);

function principal(){
    const t = $("#tablero");
    console.log(t)

    const letras = "acvg";

    for (var i = 0; i < letras.length; i++) {
        t.append("<span id='arrastrable-"+i+"' class='arrastrable' ondragstart='arrastrando()' draggable='true' ondragover='llegada()' ondrop='solto()'>"+letras[i]+"</span>");
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

    let elementoArrastrado = $("#"+event.dataTransfer.getData('text'));
    const destino = $("#tablero");

    destino.append(elementoArrastrado);

    let text = $("#tablero").text();

    if(text != text.split('').sort().join('')){
        $("#tablero span").css("color","red");
        setInterval(volverNormal, 1500);
    }else{
        $("#tablero span").css("color","green");
        setInterval(volverNormal, 1500);
    }

    event.dataTransfer.cleanData;
}

function volverNormal(){
    $("#tablero span").css("color","black");
}