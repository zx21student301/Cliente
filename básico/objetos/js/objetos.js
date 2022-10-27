const persona0 = {
	nombre:"Raúl",
	apellidos:"Ramirez",
	edad:30,
	fechaNac:new Date("1993-04-12"),
	nombreCompleto: function(){
		return this.nombre +" "+ this.apellidos;
	}
}
const persona1 = {
	nombre:"Ana",
	apellidos:"López",
	edad:19,
	fechaNac:new Date("2003-08-23"),
	nombreCompleto: function(){
		return this.nombre +" "+ this.apellidos;
	}
}

const persona2 = {
	nombre:"Juan",
	apellidos:"García",
	edad:4,
	fechaNac:new Date("2018-05-17"),
	nombreCompleto: function(){
		return this.nombre +" "+ this.apellidos;
	}
}

const persona3 = {
	nombre:"Antonio",
	apellidos:"Fernández",
	edad:59,
	fechaNac:new Date("1954-02-09"),
	nombreCompleto: function(){
		return this.nombre +" "+ this.apellidos;
	}
}

const listaPersonas = [persona0,persona1,persona2,persona3];

function mostrarObjetos(){
	console.log(persona1.nombre);
	console.log(persona1.apellidos);
	console.log(persona1.edad);
	console.log(persona1.nombreCompleto());
	console.log(persona1.fechaNac);
	//Añadir información de manera dinámica
	persona1.direccion = "Calle principal";

	console.log(persona2["nombre"]);
	console.log(persona2["apellidos"]);
	console.log(persona2["edad"]);
	console.log(persona2.nombreCompleto());

	console.log(listaPersonas);
}

function ordenarListaPersonas(){
	/*Ordenado por edades
	console.log(listaPersonas);
	listaPersonas.sort(function(a, b){return a.edad - b.edad});
	console.log(listaPersonas);*/
	//Ordenado por orden alfabético apellidos
	listaPersonas.sort(ordenAlfabeticoApellidos);
	console.log(listaPersonas);
}

function ordenAlfabeticoApellidos(a, b){
	if(a.apellidos<b.apellidos){return 1;}
	if(a.apellidos>b.apellidos){return -1;}
	return 0;
}

function ordenarFechaNac(){
	listaPersonas.sort(ordenFechaNac);
	console.log(listaPersonas);
}

function ordenFechaNac(a, b){
	if(a.fechaNac<b.fechaNac){return 1;}
	if(a.fechaNac>b.fechaNac){return -1;}
	return 0;
}

function personaMayor(){
	listaPersonas.sort(ordenEdad);
	console.log(listaPersonas);

	document.getElementById("salida").innerHTML = listaPersonas[0].nombreCompleto();
}

function personaMenor(){
	listaPersonas.sort(ordenEdad);
	console.log(listaPersonas);

	document.getElementById("salida").innerHTML = listaPersonas[listaPersonas.length -1].nombreCompleto();
}

function ordenEdad(a, b){
	if(a.edad < b.edad){return 1;}
	if(a.edad > b.edad){return -1;}
	return 0;
}