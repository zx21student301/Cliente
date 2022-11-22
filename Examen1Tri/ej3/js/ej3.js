onload = sonPares;

function sonPares(){

	let listaNums = [2,4,4,2,10];
	let pares = false;

	for (num of listaNums){
		if(num%2 == 0){
			pares = true;
		}else{
			pares = false;
			break;
		}
	}
	console.log("Todos son pares = "+pares);
}