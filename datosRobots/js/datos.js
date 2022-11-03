onload = principal

let cuerpo = document.getElementById("cuerpo");	
let img = document.createElement("img");
let boton = document.createElement("button");
let iden = document.createElement("p");
let nacim = document.createElement("p");
let ciudad = document.createElement("p");

function principal() {
	boton.setAttribute("onclick","pasarRobot()");
	pasarRobot();
}

function pasarRobot(){
		//*********************************
	// configuracion y objetos	

	//crear el objeto XMLHttpRequest para acceder al servidor
	let datosRobots = new XMLHttpRequest();

	//*********************************
	// codigo para tratar la respuesta
	datosRobots.onreadystatechange  = function(){

		//evaluar la respuesta del servidor
		if(this.readyState == 4 && this.status == 200){
			let datos = JSON.parse(this.responseText);

			img.setAttribute("src", "\""+datos.avatar+"\"");

			iden.innerHTML = datos.first_name + " " + datos.last_name
			cuerpo.appendChild(iden);

			nacim.innerHTML = datos.date_of_birth
			cuerpo.appendChild(nacim);

			ciudad.innerHTML = datos.address-city
			cuerpo.appendChild(ciudad);

			boton.innerHTML = "Siguiente"
			cuerpo.appendChild(boton);
		}
	}

	//*********************************
	// codigo para hacer la peticion al servidor

	//construir la petición al servidor
	datosRobots.open("GET","https://random-data-api.com/api/v2/users",true);
	//ejecutar la petición al servidor
	datosRobots.send();

}