//Clase Persona exportada para usarse en otros ficheros .js
export default class Persona{
	//El constructor se pone con la palabra constructor
	//este constructor de Persona crea tres atributos
	constructor(nombre,apellidos,edad){
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.edad = edad;
	}
	//tiene un metodo que devuelve el nombre completo
	nombreCompleto(){
		return this.nombre + " " + this.apellidos;
	}
}