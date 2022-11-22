function compruebaPrimo(){
	let p = document.getElementById("salida");

	let n = document.getElementById("num").value;

	let num = parseInt(n);

	if((0<num) & (num<100)){
		let xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function(){

			if(this.readyState == 4 && this.status == 200){
				let listaNums =  JSON.parse(this.responseText);
				p.innerHTML = listaNums;
			}
		}

		xmlhttp.open("GET","ej6.py?numero="+n,true);
		xmlhttp.send();
	}else{
		alert("El numero debe estar entre 0 y 100");
	}
}