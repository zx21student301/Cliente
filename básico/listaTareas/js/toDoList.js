let cont = 0;

function añadirTarea(){
	cont = cont+1

	let tarea = document.getElementById("tarea");

	let fila = document.createElement("tr");

	let colum1 = document.createElement("td");
	let colum2 = document.createElement("td");

	let text = document.createElement("p");

	let btnBorrar = document.createElement("button");
	btnBorrar.setAttribute("onclick","borrarTarea(cont)");
	btnBorrar.setAttribute("id","btn"+cont);

	let cuerpo = document.getElementById("cuerpoTabla");

	let tabla = document.getElementById("tablaTareas");

	text.innerHTML = tarea.value;

	colum1.appendChild(text);

	btnBorrar.innerHTML = "Borrar";

	colum2.appendChild(btnBorrar);

	fila.appendChild(colum1);
	fila.appendChild(colum2);

	let id = "tarea"+cont;

	fila.setAttribute("id",id);

	cuerpo.appendChild(fila);

	tabla.appendChild(cuerpo);
}

function borrarTarea(){

	let tareaBorrar = document.getElementById("tarea");

	tareaBorrar.removeChildren();
}