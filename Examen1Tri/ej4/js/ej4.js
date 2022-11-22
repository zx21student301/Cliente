onload=principal;

function principal() {
	let inputs = document.getElementsByTagName("input");
	let contInputs = 1;
	for (i of inputs){
		i.setAttribute("onchange","sacarAlert("+contInputs+")");
		contInputs++;
	}
}

function sacarAlert(id){
	let input1 = document.getElementById("texto"+id).value;
	let input2 = document.getElementById("texto"+id).value;

	if(id == 1){
		alert(input1);
	}else if(id == 2){
		alert(input2);
	}
}