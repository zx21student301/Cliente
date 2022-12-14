class Rectangulo {
	constructor(anc,alt){
		this._ancho = anc;
		this._alto = alt;
	}

	get ancho() {
		return this._ancho;
	}

	set ancho(x){
		this._ancho = x;
	}

	get alto() {
		return this._alto;
	}

	set alto(x){
		this._alto = x;
	}

	area(){
		return this.ancho * this.alto;
	}

	perimetro(){
		return (this.ancho * 2) + (this.alto * 2);
	}
}