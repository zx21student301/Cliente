onload = principal;

let ctx1;
let ctx2;
let ctx3;

function principal() {
	let canvas = document.getElementById("myCanvas");

	ctx1 = canvas.getContext("2d");
	console.log(canvas.width);
	console.log(canvas.height);

	//En rectangulos:
		//ctx.fillRect(x, y, width, height);
	ctx1.fillStyle = "#FF0000";
	ctx1.fillRect(0, 0, 150, 75);
	ctx1.fillStyle = "#00FF00";
	ctx1.fillRect(10, 10, 150, 75);

	//Crear un rectangulo desde la esquina superior izquierda y de ancho y alto la mitad del tamaño del canvas (que es un cuadrado)

	let canvas2 = document.getElementById("myCanvas2");

	ctx2 = canvas2.getContext("2d");

	ctx2.fillStyle = "#0000000";
	ctx2.fillRect(0, 0, canvas2.width/2, canvas2.height/2);

	ctx2.fillStyle = "#0000000";
	ctx2.fillRect(canvas2.width/2, canvas2.height/2, canvas2.width/2, canvas2.height/2);
}

function dibujarLinea(){
	let canvas3 = document.getElementById("myCanvas3");

	ctx3 = canvas3.getContext("2d");

	let x = document.getElementById("coordx").value;
	let y = document.getElementById("coordy").value;
	let ancho  = document.getElementById("ancho").value;
	let color = document.getElementById("color").value;

	ctx3.beginPath(); //comienza un camino, que se cierra con .fill() / .closePath() / .stroke()
	ctx3.moveTo(canvas3.width/2,canvas3.height/2); //empieza en el centro
	ctx3.lineTo(x , y); //acaba donde marcan los inputs de entrada
	ctx3.lineWidth = ancho;
	ctx3.strokeStyle = color;
	ctx3.stroke();
}

function dibujarCirculo(){
	let canvas4 = document.getElementById("myCanvas4");

	ctx4 = canvas4.getContext("2d");

	let x = document.getElementById("centrox").value;
	let y = document.getElementById("centroy").value;
	let radio = document.getElementById("radio").value;

	ctx4.beginPath();
	ctx4.arc(x, y, radio, 0, 2 * Math.PI); //ctx.arc(x,y,radio,empieza arco (radianes),termina arco (radianes))
	ctx4.stroke();
}