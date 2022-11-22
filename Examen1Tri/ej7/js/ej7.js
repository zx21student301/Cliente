onload = principal;

let ctx;

function principal(){
	pintarTablero();
}

function pintarTablero(){
	let canvas = document.getElementById("tablero");

	canvas.setAttribute("style","border: 2px black solid;")

	ctx = canvas.getContext("2d");

}