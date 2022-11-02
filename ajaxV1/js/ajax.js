onload = principal

function principal() {
	document.getElementById("enviar").setAttribute("onclick","llamadaAjax()")
}

function llamadaAjax() {

	//*********************************
	//	configurar el objeto para la petición al servidor
	//	y capturar otros datos
	//*********************************

	let numero = document.getElementById("numero").value;

	//crear el objeto XMLHttpRequest para acceder al servidor
	let xmlhttp = new XMLHttpRequest();

	//*********************************
	//	registro de la funcion que trata la respuesta
	//	del servidor
	//*********************************

	//registrar la función que se ejecuta con la respuesta del servidor
	xmlhttp.onreadystatechange = function(){

		//evaluar la respuesta del servidor
		if(this.readyState == 4 && this.status == 200){

			//tratar los datos enviado por el servidor
			document.getElementById("salida").innerHTML = this.responseText;
		}
	}

	//*********************************
	//	codigo que realiza la peticion al servidor
	//	se pueden hacer peticiones GET, POST ,(y otros verbos HTTP)
	//*********************************

	//construir la petición al servidor
	xmlhttp.open("GET","dimeNumero.py?num="+numero,true);
	//ejecutar la petición al servidor
	xmlhttp.send();
}