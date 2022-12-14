//class Empleado que hereda de herencia
//tiene un campo salario y un metodo infoEmpleado
//mas la informacion de persona

class Empleado extends Persona{
	//constructor de la clase
	constructor(nom,apell,ed,sal){
		super(nom,apell,ed);
		this._salario = sal;
	}

	//getter y setter de los atributos que no estén ya en la clase Persona
	get salario() {
		return this._salario;
	}

	set salario(x) {
		this._salario = x;
	}

	infoEmpleado(){
		//Se llama a los gets de la clase Persona y al nuevo atributo creado en la clase Empleado
		//return "Nombre y apellidos: "this.nombre+" "+this.apellidos+",\n"+"edad: "this.edad+",\n"+"salario: "+this._salario;;
		return this.infoPersona()+",\n"+"salario: "+this._salario;
	}
}