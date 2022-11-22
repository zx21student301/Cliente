function validaTexto(){
	let texto = document.getElementById("texto").value;

	let textLong = texto.length;

	console.log(texto.substring(0,3))

	if(8 <= textLong){
		if(textLong <= 10){
				if(texto.substring(0,3) == "123"){
					return true
			}else{
				alert("La cadena no empieza por 123");
				return false
			}
		}else{
			alert("La cadena mide más de 10 caracteres");
			return false
		}
	}else{
		alert("La cadena mide menos de 8 caracteres");
		return false
	}
	return false
}