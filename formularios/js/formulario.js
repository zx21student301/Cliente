let longNomb

function campoNoVacio(){
	/*if(document.getElementById("nombre").value.length == 0){
		return false;
	}
	return true;*/

	//return document.getElementById("nombre").value.length == 0 ? false:true

	let nom = document.getElementById("nombre").value;
	let edad = document.getElementById("edad").value;

	longNomb = nom.length;
	if(longNomb == 0){
		return false;
	}

	patron = /\b[0-9]+\b/;
	if (!patron.test(edad)){
		return false;
	}

	return true;	
}