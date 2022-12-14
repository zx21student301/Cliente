class Persona {
	//constructor de la clase
	constructor(nom,apell,ed){
		this._nombre = nom;
		this._apellidos = apell;
		this._edad = ed;
	}

	//getter y setter de los atributos
	get nombre() {
		return this._nombre;
	}

	set nombre(x) {
		this._nombre = x;
	}

	get apellidos() {
		return this._apellidos;
	}

	set apellidos(x) {
		this._apellidos = x;
	}

	get edad() {
		return this._edad;
	}

	set edad(x) {
		this._edad = x;
	}

	infoPersona(){
		//Aqui estamos llamando a los getter, no a los atributos
		return "Nombre y apellidos: "+this.nombre+" "+this.apellidos+",\n"+"edad: "+this.edad;
		//Aqui estamos llamando a los atributos
		//return "Nombre y apellidos: "+this._nombre+" "+this._apellidos+",\n"+"edad: "+this._edad;
	}
}