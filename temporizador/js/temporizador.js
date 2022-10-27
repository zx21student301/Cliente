onload =  principal

let tiempo = 0;
let salida;
let idTemporizador;
let tempActivo = false;
let tempoParado = false;

function principal() {
	//asignacion de funciones a los botones
	document.getElementById("inicio").setAttribute("onclick","iniciar()");
	document.getElementById("parar").setAttribute("onclick","parar()");
	document.getElementById("reset").setAttribute("onclick","reset()");
	//captura del elemento salida
	salida = document.getElementById("salida");
}

//responde al boton de iniciar, carga el tiempop
//e inicia el temporizador a 1 seg (1000 milisegundos)
function iniciar() {
	if(!tempActivo){ //si no hay temporizador activo
		tempActivo = true; //se marca que hay un temporizador activo
		tiempo = document.getElementById("tiempo").value; //se captura el tiempo inical
		salida.innerHTML = tiempo; //se pone en la salida
		idTemporizador = setInterval(actualizarSalida,1000); //se inicia el temporizador por intervalo
	}	
}

//funcion que actualiza el tiempo, descuenta un segundo cada vez que se ejecuta
function actualizarSalida() {
	if(tiempo <= 1){ //finaliza el temporizador cuando se alcanza el valor 1
		clearInterval(idTemporizador); //quita el temporizador guardado en idTemporizador
		tempActivo = false; //indica que ya no hay temporizador activo
	}
	tiempo--; //resta uno al tiempo
	salida.innerHTML = tiempo; //lo imprime en el parrafo salida
}

//para o reactiva el temporizador
function parar() {
	if(tempActivo){ //si esta activo un temporizador
		if(!tempoParado){ //si el tiempo no esta parado ya
			clearInterval(idTemporizador);
			tempoParado = true; //indica que el tiempo esta parado
		}else{ //si el tiempo esta parado
			tiempo = parseInt(salida.innerHTML); //coge el valor que este en el parrado salida y lo convierte en el tiempo
			idTemporizador = setInterval(actualizarSalida,1000);
			tempoParado = false; //indica que el tiempo ya no esta parado
		}
	}
}

//reinicia el temporizador
function reset() {
	if(tempActivo){ //si hay un temporizador activo lo quita
		clearInterval(idTemporizador);
	}
	//inicializa los valores
	salida.innerHTML = "0";
	tiempo = 0;
	tempActivo = false;
	tempoParado = false;
}