function ejer1(){
 	console.log("Ejercicio 1");

	//Recuperar el texto del input
	let texto = document.getElementById("cadena").value;

	let long = texto.length;

	let newtexto ="";

	//Recorrer el texto con for
	for(var i = 0; i < long; i++){
		//Por cada letra meter un <br>
		newtexto += texto[i] + "<br>";
	}

	//Texto obtenido meter en p con el id ejer1
	document.getElementById("pEjer1").innerHTML = newtexto;
}

function ejer2(){
	console.log("Ejercicio 2");

	let texto = document.getElementById("cadena").value;

	let long = texto.length;

	let cont = 0;

	for(var i = 0; i < long; i++){

		if((texto[i]>='a' && texto[i]<='z') || (texto[i]>='A' && texto[i]<='Z') || texto[i] == 'ñ' || texto[i] == 'Ñ'){
			cont++
		}
	}

	document.getElementById("pEjer2").innerHTML = cont;
}

function ejer3(){
	console.log("Ejercicio 3");

	let texto = document.getElementById("cadena").value;

	let long = texto.length;

	let textoReversa = "";

	for(var i = long-1; i > -1; i--){
		textoReversa += texto[i];
	}

	document.getElementById("pEjer3").innerHTML = textoReversa;
}

function ejer4(){
	console.log("Ejercicio 4");

	let texto = document.getElementById("cadena").value;

	let palabra = document.getElementById("palabra").value

	texto = texto.toUpperCase();

	palabra = palabra.toUpperCase();

	let buscar = texto.search(palabra);

	document.getElementById("pEjer4").innerHTML = buscar;
}

function ejer5(){
	console.log("Ejercicio 5");

	let texto = document.getElementById("cadena").value;

	let long = texto.length;

	let letra = document.getElementById("letra").value;

	let contLetra = 0;

	if((letra>='a' && letra<='z') || (letra>='A' && letra<='Z') || letra == 'ñ' || letra == 'Ñ'){

		for(var i = 0; i < long; i++){
			if(letra == texto[i]){
				contLetra++;
			}
		}
	}else{
		console.log("Error, no has introducido una letra")
	}

	document.getElementById("pEjer5").innerHTML = contLetra;
}

function ejer6(){
	console.log("Ejercicio 6");

	let texto = document.getElementById("cadena").value;

	let long = texto.length;

	let contA = 0;
	let contE = 0;
	let contI = 0;
	let contO = 0;
	let contU = 0;

	for(var i = 0; i < long; i++){
			if(texto[i] == 'a' || texto[i] == 'A'){
				contA++;
			}else if(texto[i] == 'e' || texto[i] == 'E'){
				contE++;
			}else if(texto[i] == 'i' || texto[i] == 'I'){
				contI++;
			}else if(texto[i] == 'o' || texto[i] == 'O'){
				contO++;
			}else if(texto[i] == 'u' || texto[i] == 'U'){
				contU++;
			}
		}

	document.getElementById("pEjer6").innerHTML = "Contador A = " +contA +"<br>"+ 
													"Contador E = " +contE +"<br>"+ 
													"Contador I = " +contI +"<br>"+
													"Contador O = " +contO +"<br>"+
													"Contador U = " +contU +"<br>";

}

function ejer7(){
	console.log("Ejercicio 7");

	let texto = document.getElementById("cadena").value;

	let long = texto.length;

	let palabra ="";

	for(var i = 0; i < long; i++){
		if (texto[i] != " "){
			palabra += texto [i];
		}else if (texto[i] == " "){
			palabra += "<br>";
		}
	}

	document.getElementById("pEjer7").innerHTML = palabra;
}

function ejer8(){
	console.log("Ejercicio 8");

	let texto = document.getElementById("cadena").value;

	let long = texto.length;
	//Le va dando la vuelta a las palabras.
	let palabraReversa ="";

	 //Guarda las palabras ya dadas la vuelta.
	let salida ="";

	for(var i = 0; i < long; i++){
		if (texto[i] != " "){
			palabraReversa = texto [i] + palabraReversa;
			console.log(palabraReversa);
		}else{
			salida = salida + " " + palabraReversa;
			palabraReversa = '';
		}
	}
	salida = salida + " " + palabraReversa;
	document.getElementById("pEjer8").innerHTML = salida;
}