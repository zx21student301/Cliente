onload=principal;

function principal() {
	document.getElementById('boton1').onclick=cambia;
	document.getElementById('boton2').onclick=vuelve;
}

function cambia() {

	console.log("Ejecutado Cambia");

	//se crea un array que guarda todos los elementos con el tag 'p'
	parrafos = document.getElementsByTagName('p');
	//cada uno de los elementos guardados en parrafos se cambia su contenido
	for (parr of parrafos){
		parr.innerHTML="cambiado";
	}
}

function vuelve() {

	console.log("Ejecutado Vuelve");

	//se crea un array que guarda todos los elementos con el tag 'p'
	parrafos = document.getElementsByTagName('p');
	//cada uno de los elementos guardados en parrafos se cambia su contenido
	for (parr of parrafos){
		parr.innerHTML="Esto es un párrafo";
	}
}

principal();

document.getElementById('enviar').onclick=cambia;

let f = cambia;



