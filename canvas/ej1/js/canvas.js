onload = principal

let ctx;
let ctx1;

function principal() {
	pintarLaberinto();

	pintarMonigote();
}

function pintarLaberinto() {
	let canvas = document.getElementById("laberinto");

	ctx = canvas.getContext("2d");

	//bordes del laberinto
	//	borde izquierdo
	ctx.beginPath();
	ctx.moveTo(10,30);
	ctx.lineTo(10,150);
	ctx.lineWidth = 3;
	ctx.stroke();
	//	borde superior
	ctx.beginPath();
	ctx.moveTo(10,10);
	ctx.lineTo(150,10);
	ctx.lineWidth = 3;
	ctx.stroke();
	// borde inferior
	ctx.beginPath();
	ctx.moveTo(10,150);
	ctx.lineTo(150,150);
	ctx.lineWidth = 3;
	ctx.stroke();
	//	borde derecho
	//		derecho 1
	ctx.beginPath();
	ctx.moveTo(150,10);
	ctx.lineTo(150,60);
	ctx.lineWidth = 3;
	ctx.stroke();
	//		derecho 2
	ctx.beginPath();
	ctx.moveTo(150,90);
	ctx.lineTo(150,150);
	ctx.lineWidth = 3;
	ctx.stroke();

	//lineas interiores
	ctx.beginPath();
	ctx.moveTo(30,10);
	ctx.lineTo(30,30);
	ctx.lineWidth = 3;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(150,60);
	ctx.lineTo(90,60);
	ctx.lineWidth = 3;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(120,60);
	ctx.lineTo(120,30);
	ctx.lineWidth = 3;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(30,10);
	ctx.lineTo(30,30);
	ctx.lineWidth = 3;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(90,60);
	ctx.lineTo(90,90);
	ctx.lineWidth = 3;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(90,90);
	ctx.lineTo(30,90);
	ctx.lineWidth = 3;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(30,90);
	ctx.lineTo(30,120);
	ctx.lineWidth = 3;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(10,60);
	ctx.lineTo(60,60);
	ctx.lineWidth = 3;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(60,60);
	ctx.lineTo(60,30);
	ctx.lineWidth = 3;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(60,30);
	ctx.lineTo(90,30);
	ctx.lineWidth = 3;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(150,90);
	ctx.lineTo(120,90);
	ctx.lineWidth = 3;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(120,90);
	ctx.lineTo(120,120);
	ctx.lineWidth = 3;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(120,120);
	ctx.lineTo(60,120);
	ctx.lineWidth = 3;
	ctx.stroke();
}

function pintarMonigote() {
	let canvas = document.getElementById("monigote");

	ctx1 = canvas.getContext("2d");
	//cuerpo
	ctx1.beginPath();
	ctx1.fillStyle = "#722C03";
	ctx1.fillRect(155,130,90,140);
	ctx1.stroke();

	//piernas
		//izquierda
	ctx1.beginPath();
	ctx1.lineWidth = 2;
	ctx1.strokeStyle = "#722C03";
	ctx1.rect(155,270,30,70);
	ctx1.stroke();
		//derecha
	ctx1.beginPath();
	ctx1.lineWidth = 2;
	ctx1.strokeStyle = "#722C03";
	ctx1.rect(215,270,30,70);
	ctx1.stroke();

	//brazos
		//izquierdo
	ctx1.beginPath();
	ctx1.moveTo(155,130);
	ctx1.lineTo(105,200);
	ctx1.lineWidth = 2;
	ctx1.strokeStyle = "#722C03";
	ctx1.stroke();

	ctx1.beginPath();
	ctx1.moveTo(105,200);
	ctx1.lineTo(125,210);
	ctx1.lineWidth = 2;
	ctx1.strokeStyle = "#722C03";
	ctx1.stroke();

	ctx1.beginPath();
	ctx1.moveTo(125,210);
	ctx1.lineTo(155,170);
	ctx1.lineWidth = 2;
	ctx1.strokeStyle = "#722C03";
	ctx1.stroke();
		//derecho
	ctx1.beginPath();
	ctx1.moveTo(245,130);
	ctx1.lineTo(295,200);
	ctx1.lineWidth = 2;
	ctx1.strokeStyle = "#722C03";
	ctx1.stroke();

	ctx1.beginPath();
	ctx1.moveTo(295,200);
	ctx1.lineTo(275,210);
	ctx1.lineWidth = 2;
	ctx1.strokeStyle = "#722C03";
	ctx1.stroke();

	ctx1.beginPath();
	ctx1.moveTo(275,210);
	ctx1.lineTo(245,170);
	ctx1.lineWidth = 2;
	ctx1.strokeStyle = "#722C03";
	ctx1.stroke();

	//cabeza
	ctx1.beginPath();
	ctx1.arc(200,95,35,0,2*Math.PI);
	ctx1.strokeStyle = "#06B2B3"
	ctx1.stroke();

	//ojos
		//izquierdo
	ctx1.beginPath();
	ctx1.strokeStyle = "#FF0000"
	ctx1.fillStyle = "#FF0000"
	ctx1.arc(185,85,5,0,2*Math.PI);
	ctx1.fill();
	ctx1.stroke();
		//derecho
	ctx1.beginPath();
	ctx1.strokeStyle = "#FF0000"
	ctx1.fillStyle = "#FF0000"
	ctx1.arc(215,85,5,0,2*Math.PI);
	ctx1.fill();
	ctx1.stroke();
}