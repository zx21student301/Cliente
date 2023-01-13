$(principal)

function principal(){
	$('a.printPage').click(function(){
           window.print();
           return false; //este return invalida la acción del "a", si cambiamos y ponemos "true", se ejecutará la funcion y además el "a" hará su funcion
	});
}