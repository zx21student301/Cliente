$(principal);

function principal(){
	$("p").click(function(){
		$("<div>Esto es un evento de click</div>").appendTo("body");
	});

	$("p").dblclick(function(){
		$("<div>Esto es un evento de doble click</div>").appendTo("body");
	});
}