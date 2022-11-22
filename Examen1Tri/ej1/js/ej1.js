window.onload=principal;

function principal(){
	let n1 = prompt("Introduce el 1 número entero");
	let n2 = prompt("Introduce el 2 número entero");
	let n3 = prompt("Introduce el 3 número entero");
	let n4 = prompt("Introduce el 4 número entero");

	let int1 = parseInt(n1)
	let int2 = parseInt(n2)
	let int3 = parseInt(n3)
	let int4 = parseInt(n4)

	if(Number.isInteger(int1) & Number.isInteger(int2) & Number.isInteger(int3) & Number.isInteger(int4)){
		let media = (int1 + int2 + int3 + int4)/4;
		alert("La media es "+media);
	}else{
		alert("Un número no es un entero");
	}
}