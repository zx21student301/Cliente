//fecha con dia mes año y hora tipo string
console.log(Date());
console.log(typeof Date());

//fecha con dia mes año y hora tipo object
let fecha = new Date();
console.log(typeof fecha);

//milisegundos pasados desde el 1/1/1970
console.log(Date.now());

//calcular cuantos milisegundos he vivido
let fechaNac = new Date(2003, 7, 23);
let fechaAct = Date.now();

let tiempoPasado = fechaAct - fechaNac.getTime();
console.log(tiempoPasado);

//comprobar si lo que introduce es una fecha o no
let is_date = function(input) {
  if ( Object.prototype.toString.call(input) === "[object Date]" ) 
    return true;
  return false;   
};

console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99,5,24,11,33,30,0)));
console.log(is_date([1, 2, 4, 0]));

//separar la fecha por el separador que envies
let curday = function(s){
	let f = new Date();
	return f.getFullYear()+s+(f.getMonth()+1)+s+f.getDate();
}

console.log(curday('/'));
console.log(curday('-'));

//devuelve cuantos días tiene el mes indicado
let getDaysInMonth = function(mm, yy) {
	//con el dia 0 se consigue que devuelva el último dia del mes anterior
	return new Date(yy, mm, 0).getDate();
}

console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));

//sacar el mes (en string) a partir de una fecha
let month_name = function(f) {
	let options = {weekday:'long',year:'numeric', month:'long', day:'numeric'};
	return f.toLocaleDateString(undefined,options).split(" ")[3];
}

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));

//comparar dos fechas 
let compare_dates = function(f1, f2) {
	if (f1.getTime() == f2.getTime()){
		return "f1 es la misma que f2";
	}else if(f1.getTime() > f2.getTime()){
		return "f1 es mayor que f2";
	}else if(f1.getTime() < f2.getTime()){
		return "f1 es menor que f2";
	}
}

console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));

//ejercicio 1
function contarTiempo(){
	let f1 = new Date(document.getElementById("fecha1").value);
	let f2 = new Date(document.getElementById("fecha2").value);

	let resta = f2 - f1;

	let fd = resta / 1000 / 60 / 60 / 24; 

	if(resta != NaN){document.getElementById("dia").innerHTML = fd;}

	let fm = fd / 30

	if(Math.floor(fm) > 1){document.getElementById("mes").innerHTML = Math.floor(fm);}

	let fa = fm / 12

	if(Math.floor(fa) > 1){document.getElementById("anio").innerHTML = Math.floor(fa);}
}