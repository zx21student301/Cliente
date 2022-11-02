onload = principal

function principal() {
	document.getElementById("pedirDatos").setAttribute("onclick","llamadaServidor()");
}

function llamadaServidor() {

	//*********************************
	// configuracion y objetos
	
	//parrafo para la salida de datos
	let parrafo = document.getElementById("salida");	

	//crear el objeto XMLHttpRequest para acceder al servidor
	let jsonhttp = new XMLHttpRequest();

	//*********************************
	// codigo para tratar la respuesta
	jsonhttp.onreadystatechange  = function(){
		//evaluar la respuesta del servidor
		//this.status = es el tipo de error que puede dar el servidor (200 -> encontrado, 400 -> no encontrado)
		if(this.readyState == 4 && this.status == 200){
			let n = JSON.parse(this.responseText);
			parrafo.innerHTML = n;
		}
	}

	//*********************************
	// codigo para hacer la peticion al servidor

	//construir la petición al servidor
	jsonhttp.open("GET","dimeN.py",true);
	//ejecutar la petición al servidor
	jsonhttp.send();
}