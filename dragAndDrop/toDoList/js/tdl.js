function arrastrando(){
  	event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.style.backgroundColor = 'red';
}

function llegada(){
	event.preventDefault();
	console.log("llegó");
}

function solto(){
	console.log("soltó");
	const id = event.dataTransfer.getData('text');
	console.log("id de div arrastrado: "+id);
	console.log("id de div destino: "+event.target.id);

	const elementoArrastrado = document.getElementById(id);
	const destino = event.target;

	destino.appendChild(elementoArrastrado);

	event.dataTransfer.cleanData;
}