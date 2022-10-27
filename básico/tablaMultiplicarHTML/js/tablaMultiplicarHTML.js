onload = principal;



function principal() {

    let num = prompt("Elige una tabla de multiplicar: ");

    while(10 < num > 1){
        num = prompt("Elige un número entre el 1 y el 10: ");
    }

    let n = parseInt(num);

    let text = "";

    for (let i = 1; i < 11; i++) {
        text += i + " * "+ n+" = " + i * n + "<br>";
    }

    document.getElementById("oper").innerHTML = text;
}