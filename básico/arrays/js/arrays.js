onload = iniciar;

//variables de ambito global
let texto = "";
let datoUsuario;
let salida;
let numero;

function iniciar(){
	//recuperar objetos del DOM (elementos o nodos)
	datoUsuario = document.getElementById("valores");
	salida = document.getElementById("salida");
	numero =  document.getElementById("numero");
}

function arraysBasico(){
	let listaNum = datoUsuario.value.split(" ");

	//si se añade un elemento en una posición que no tenga posición anterior, se crean agujeros en las posiciones anteriores que no tengan valor
	listaNum[10] = "50"

	/*
	let listaPalabra = ["hola", "adios", "buenas tardes"];

	listaPalabra[3] = "buenos dias";
	*/

	//aplica la función a cada uno de los elementos del array
	listaNum.forEach(suma2);

	//recorre el array haciendo el bucle por cada uno de los elementos que haya en el array
	for(num of listaNum){
		texto += "a" + num + "<br>"; 
	}

	salida.innerHTML = texto;
}	

function suma2(value){
	texto += (parseInt(value) + 2)+ "<br>";
}

function arrayToString(){
	let listaN = datoUsuario.value.split(" ");
	salida.innerHTML = listaN.toString();
}

function arrayJoin(){
	salida.innerHTML = datoUsuario.value.split(" ").join(numero.value);
}

function arrayPop(){
	//Pop elimina el último elemento del array

	let lista = datoUsuario.value.split(" ");
	lista.pop();
	salida.innerHTML = lista.join("-");
}

function arrayPush(){
	//Push añade un elemento al final del array

	let lista = datoUsuario.value.split(" ");
	lista.push(numero.value);
	salida.innerHTML = lista.join("-");
}

function arraySplice(){
	//Splice añade elementos en el array en la posición donde digas 
	/*.splice(2,0,value)-> 
	primer número: posición donde se va a colocar los valores 
	segundo número: indica cuantos valores se van a sustituir por los nuevos valores*/ 
	
	let lista = datoUsuario.value.split(" ");
	lista.splice(2,0,numero.value);
	salida.innerHTML = lista.join("-");
}

function arraySlice(){
	//Slice crea un nuevo array con los valores que le indiques según posición
	/*.slice(2,5)
	primer número: posición por la que empieza a coger valores
	segundo númeor: posición hasta la que llega (no la incluye)*/

	let lista = datoUsuario.value.split(" ");
	let listaNueva = lista.slice(2,5);
	salida.innerHTML = listaNueva;
}

function ordenarNormalSort(){
	let lista = datoUsuario.value.split(" ");
	lista.sort();
	salida.innerHTML = lista.join("-");
}

function ordenarReversaSort(){
	let lista = datoUsuario.value.split(" ");
	lista.sort().reverse();
	salida.innerHTML = lista.join("-");
}

function ordenarNumericamente(){
	//Función de sort para poder ordenar números de menor a mayor
	let lista = datoUsuario.value.split(" ");
	lista.sort(function(a, b){return a - b});
	//OTRAS FROMAS:
		//lista.sort((a, b) => {return a -b});
		//lista.sort(ordenNum);
	salida.innerHTML = lista.join("-");
}

/*function ordenNum(a, b){
	return a - b
}*/

function ordenarNumericamenteReversa(){
	//Función de sort para poder ordenar números de mayor a menor
	let lista = datoUsuario.value.split(" ");
	lista.sort(function(a, b){return b - a});
	//OTRAS FROMAS:
		//lista.sort(ordenNumR).reversa;
		//lista.sort(ordenNumR)
	salida.innerHTML = lista.join("-");
}

/*function ordenNum(a, b){
	return b - a
}*/

function arrayForEach(){
	let lista = datoUsuario.value.split(" ");
	console.log(lista);
	lista.forEach(pasaAEntero);
}

function pasaAEntero(value, index, array){
	salida.innerHTML += value+"-"+index+":";
	return parseInt(value);
}

function arrayMap(){
	const lista = datoUsuario.value.split(" ");
	const nuevaLista = lista.map(pasaAEntero);
	console.log(lista);
	console.log(nuevaLista);
}