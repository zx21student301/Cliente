onload = principal

let alto;
let ancho;
let miCanvas;

let rctngl;
let mcnv;

function principal() {
	ancho = document.getElementById("width");
	alto = document.getElementById("height");
	miCanvas = document.getElementById("canvas");

	rctngl = new Rectangulo(ancho.value,alto.value);
	dbjCanvas.dibujaRect(miCanvas,rctngl);
}

//funcion asociada onchange de inputs
function dibuja() {
	rctngl = new Rectangulo(ancho.value,alto.value);
	dbjCanvas.dibujaRect(miCanvas,rctngl);
}

//funcion para limpiar el Canvas y dejarlo blanco desde el boton Reset
function limpiarCanvas() {
	//pone todo el canvas en blanco
	let ctx = miCanvas.getContext("2d");
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(5, 5, 400, 600);

	//pintar el texto
	ctx.font = "20px Arial";
	ctx.fillStyle = "black";
	ctx.fillText("alto: 0",150,50);
	ctx.fillText("ancho: 0",150,70);
	ctx.fillText("area: 0",150,90);
	ctx.fillText("perimetro: 0",150,110);
}