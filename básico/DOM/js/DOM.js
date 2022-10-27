// alert(document.URL);
// alert(document.doctype);
// alert(document.domain);
// alert(document.readyState);

/*function crearTabla(){
	
	let cuerpo = document.body;

	let tabla = "<table><tr><td>hola</td></tr><tr><td>adios</td></tr></table>";

	let imagen = "<img src='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/06/26/16562404613926.jpg'>";

	let contenido =tabla+imagen;

	cuerpo.innerHTML = contenido;

	let parrafo =  document.createElement("p");

	cuerpo.append(parrafo);
}*/

function crearParrafo(){
	let divParrafos = document.getElementById("parrafos");

	let parrafo = document.createElement("p");

	//parrafo.innerHTML = "hola";
	//se puede hacer tambien asi:

	let nTexto = document.createTextNode("hola");

	parrafo.appendChild(nTexto);

	divParrafos.appendChild(parrafo);
}

function crearEnlace(){
	let divEnlace = document.getElementById("enlaces");

	let enlace = document.createElement("a");
	//Crear los atributos de una etiqueta
	enlace.setAttribute("href","http://www.google.es");

	let nTexto = document.createTextNode("Ir a Google");

	enlace.appendChild(nTexto);
	divEnlace.appendChild(enlace);

	let sl = document.createElement("br");
	divEnlace.appendChild(sl);
}