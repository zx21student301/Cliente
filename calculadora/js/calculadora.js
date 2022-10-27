onload = principal;

class Calculadora{
	constructor(){
		this.operando1 = 0;
		this.operando2 = 0;
		this.operacion = 0; // 1-> + ; 2-> - ; 3-> * ; 4-> / ;
	}

	completarOper1(n){
		this.operando1 = this.operando1*10 + n;
	}

	completarOper2(n){
		this.operando2 = this.operando2*10 + n;
	}

	igual(){
		switch(this.operacion){
			case 1:
				return cal.suma();
			case 2:
				return cal.resta();
			case 3:
				return cal.multi();
			case 4:
				return cal.divis();
			default:
				return cal.suma();
		}
	}

	suma(){
		return this.operando1 + this.operando2;
	}

	resta(){
		return this.operando1 - this.operando2;
	}

	multi(){
		return this.operando1 * this.operando2;
	}

	divis(){
		if(this.operando2==0){
			return "División entre 0"
		}
		return this.operando1 / this.operando2;
	}
}

let listaBotones;
let simboloBotones = [7,8,9,"\"+\"",4,5,6,"\"-\"",1,2,3,"\"*\"","\",\"",0,"\"=\"","\"/\""];

let cal = new Calculadora();

let estado = 0;

let oper = document.createElement("p");

let op1 = document.createElement("span");
let op2 = document.createElement("span");
let op = document.createElement("span");
let result = document.createElement("span");

let n1 = "";
let dec1 = "";
let n2 = "";
let dec2 = "";
let sim = "";
let res = "";

let coma1 = false;
let coma2 = false;

function principal() {
    dibujaCalculadora();
}

function dibujaCalculadora() {
   
    let calculadora = document.getElementById("calculadoraId");
   
    listaBotones = document.getElementById("calculadoraId").childNodes;
    for (let index = 1; index < 17; index++) {
        let texto = document.createElement("p");
        texto.setAttribute("class","boton")
        texto.setAttribute("onclick","pulsado("+index+")");
        calculadora.appendChild(texto);
        listaBotones[index].innerHTML=simboloBotones[index-1];
    }
}

function pulsado(n) {

	let nums = document.getElementById("num");

    if(estado == -1){
    	n1 = "";
		n2 = "";
		sim = "";
		res = "";

		oper.innerHTML = "";
    	estado = 0
    }

    if((n==1 || n==2 || n==3 || n==5 || n==6 || n==7 || n==9 || n==10 || n==11 || n==14) && (estado == 0 || estado == 1|| estado == 2 || estado == 3)){
    	if(estado == 0 || estado == 1){
    		switch (n){
	    		case 1:
	    			n1 = n1 + "7";
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			estado = 1;
	    			break;
				case 2:
	    			n1 = n1 + "8";
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			estado = 1;
	    			break;
	    		case 3:
	    			n1 = n1 + "9";
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			estado = 1;
	    			break;
	    		case 5:
	    			n1 = n1 + "4";
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			estado = 1;
	    			break;
	    		case 6:
	    			n1 = n1 + "5";
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			estado = 1;
	    			break;
	    		case 7:
	    			n1 = n1 + "6";
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			estado = 1;
	    			break;
	    		case 9:
	    			n1 = n1 + "1";
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			estado = 1;
	    			break;
	    		case 10:
	    			n1 = n1 + "2";
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			estado = 1;
	    			break;
	    		case 11:
	    			n1 = n1 + "3";
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			estado = 1;
	    			break;
	    		case 14:
	    			n1 = n1 + "0";
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			estado = 1;
	    			break;
	    	}
    	} else if(estado == 2 || estado == 3){
    		switch (n){
	    		case 1:
	    			n2 = n2 + "7";
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			estado = 3;
	    			break;
				case 2:
	    			n2 = n2 + "8";
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			estado = 3;
	    			break;
	    		case 3:
	    			n2 = n2 + "9";
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			estado = 3;
	    			break;
	    		case 5:
	    			n2 = n2 + "4";
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			estado = 3;
	    			break;
	    		case 6:
	    			n2 = n2 + "5";
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			estado = 3;
	    			break;
	    		case 7:
	    			n2 = n2 + "6";
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			estado = 3;
	    			break;
	    		case 9:
	    			n2 = n2 + "1";
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			estado = 3;
	    			break;
	    		case 10:
	    			n2 = n2 + "2";
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			estado = 3;
	    			break;
	    		case 11:
	    			n2 = n2 + "3";
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			estado = 3;
	    			break;
	    		case 14:
	    			n2 = n2 + "0";
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			estado = 3;
	    			break;
    		}
    	}
    }

	if((n==4 || n==8 || n==12 || n==16) && estado == 1){
		switch (n){
			case 4:
				sim = " + ";
				op.innerHTML = sim;
				oper.appendChild(op);
				nums.appendChild(oper);
				estado = 2;
				cal.operacion = 1;
				break;
			case 8:
				sim = " - ";
				op.innerHTML = sim;
				oper.appendChild(op);
				nums.appendChild(oper);
				estado = 2;
				cal.operacion = 2;
				break;
			case 12:
				sim = " * ";
				op.innerHTML = sim;
				oper.appendChild(op);
				nums.appendChild(oper);
				estado = 2;
				cal.operacion = 3;
				break;
			case 16:
				sim = " / ";
				op.innerHTML = sim;
				oper.appendChild(op);
				nums.appendChild(oper);
				estado = 2;
				cal.operacion = 4;
				break;
		}
	}

	if(n == 15 && estado == 3){
		cal.operando1 = parseFloat(n1);
		cal.operando2 = parseFloat(n2);
		res = " = "+ cal.igual();
		result.innerHTML = res;
		oper.appendChild(result);
		nums.appendChild(oper);
		estado = -1;
	}

	if(n == 13 && (estado == 1 || estado == 3)){
		if(coma1 ==  false){
			n1 = n1 + ",";
			op1.innerHTML = n1;
			oper.appendChild(op1);
			nums.appendChild(oper);
			coma1 = true;
		}
		if(estado == 1){
    		switch (n){
	    		case 1:
	    			dec1 = dec1 + "7"
	    			n1 = n1 + dec1;
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			break;
				case 2:
	    			dec1 = dec1 + "8"
	    			n1 = n1 + dec1;
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			break;
	    		case 3:
	    			dec1 = dec1 + "9"
	    			n1 = n1 + dec1;
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			break;
	    		case 5:
	    			dec1 = dec1 + "4"
	    			n1 = n1 + dec1;
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			break;
	    		case 6:
	    			dec1 = dec1 + "5"
	    			n1 = n1 + dec1;
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			break;
	    		case 7:
	    			dec1 = dec1 + "6"
	    			n1 = n1 + dec1;
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			break;
	    		case 9:
	    			dec1 = dec1 + "1"
	    			n1 = n1 + dec1;
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			break;
	    		case 10:
	    			dec1 = dec1 + "2"
	    			n1 = n1 + dec1;
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			break;
	    		case 11:
	    			dec1 = dec1 + "3"
	    			n1 = n1 + dec1;
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			break;
	    		case 14:
	    			dec1 = dec1 + "0"
	    			n1 = n1 + dec1;
	    			op1.innerHTML = n1;
					oper.appendChild(op1);
	    			nums.appendChild(oper);
	    			break;
	    	}
    	} else if(estado == 3){
			if(coma2 ==  false){
				n2 = n2 + ",";
				op2.innerHTML = n2;
				oper.appendChild(op2);
				nums.appendChild(oper);
				coma2 = true;
			}
    		switch (n){
	    		case 1:
	    			dec2 = dec2 + "7"
	    			n2 = n2 + dec2;
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			break;
				case 2:
	    			dec2 = dec2 + "8"
	    			n2 = n2 + dec2;
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			break;
	    		case 3:
	    			dec2 = dec2 + "9"
	    			n2 = n2 + dec2;
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			break;
	    		case 5:
	    			dec2 = dec2 + "4"
	    			n2 = n2 + dec2;
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			break;
	    		case 6:
	    			dec2 = dec2 + "5"
	    			n2 = n2 + dec2;
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			break;
	    		case 7:
	    			dec2 = dec2 + "6"
	    			n2 = n2 + dec2;
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			break;
	    		case 9:
	    			dec2 = dec2 + "1"
	    			n2 = n2 + dec2;
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			break;
	    		case 10:
	    			dec2 = dec2 + "2"
	    			n2 = n2 + dec2;
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			break;
	    		case 11:
	    			dec2 = dec2 + "3"
	    			n2 = n2 + dec2;
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			break;
	    		case 14:
	    			dec2 = dec2 + "0"
	    			n2 = n2 + dec2;
	    			op2.innerHTML = n2;
					oper.appendChild(op2);
	    			nums.appendChild(oper);
	    			break;
    		}
    	}
	}
}

