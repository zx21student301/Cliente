function cambiaFondo(id){
	let per1 = document.getElementById("p1");
	let per2 = document.getElementById("p2");
	let per3 = document.getElementById("p3");

	if(id == "p1"){
		per1.setAttribute("style","background:lightblue;");

		per2.setAttribute("style","background:white;");

		per3.setAttribute("style","background:white;");

	}else if(id == "p2"){
		per2.setAttribute("style","background:lightblue;");
	
		per1.setAttribute("style","background:white;");

		per3.setAttribute("style","background:white;");

	}else if(id == "p3"){
		per3.setAttribute("style","background:lightblue;");

		per1.setAttribute("style","background:white;");

		per2.setAttribute("style","background:white;");
	}
}