onload = principal

function principal() {
	document.getElementById("pedirDatos").setAttribute("onclick","llamadaServidor()");
}

function llamadaServidor() {

	//*********************************
	// configuracion y objetos
	
	//parrafo para la salida de datos
	let parrafo = document.getElementById("salida");	

	//recoger el dato del input
	let numero = document.getElementById("entrada").value;

	//crear el objeto XMLHttpRequest para acceder al servidor
	let jsonhttp = new XMLHttpRequest();

	//*********************************
	// codigo para tratar la respuesta
	jsonhttp.onreadystatechange  = function(){
		//evaluar la respuesta del servidor
		//this.status = es el tipo de error que puede dar el servidor (200 -> encontrado, 400 -> no encontrado)
		if(this.readyState == 4 && this.status == 200){
			let listaN = JSON.parse(this.responseText);
			let lista  = "<ul>";
			for (n of listaN){
				lista += "<li>"+n+"</li>"
			}
			lista += "</ul>";

			parrafo.innerHTML = lista;
		}
	}

	//*********************************
	// codigo para hacer la peticion al servidor

	//construir la petición al servidor
	jsonhttp.open("GET","dimeF.py?num="+numero,true);
	//ejecutar la petición al servidor
	jsonhttp.send();
}