onload = principal

function principal() {
	let num = Math.floor((Math.random() * 10) + 1);

	console.log(num);

	let n = prompt("¿En qué número estoy pensado?");

	if (n == "" || n == null) {
		console.log("Juego finalizado");
		alert("Juego terminado");
	} else {
		while (num != n) {
			if (n == "" || n == null) {
				console.log("Juego finalizado");
				alert("Juego terminado");
				break;
			}
			console.log(n);
			if (n > num) {
				n = prompt("Mi número es menor, prueba de nuevo:");
			} else if (n < num) {
				n = prompt("Mi número es mayor, prueba de nuevo:");
			}
		}

		if (num == n) {
			alert("Lo adivinaste");
		}

		let r = prompt("¿Quieres jugar de nuevo? (S/N)");

		if (r.toUpperCase() == "S") {
			principal();
		} else if (r.toUpperCase() == "N" || r == null) {
			alert("Juego terminado");
		} else {
			alert("Error")
		}
	}
}

console.log("Adivina el número")