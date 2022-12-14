//con JQuery, el $ tiene la misma funcion que el onload
$(principal);

function principal() {
	//coje todos los elementos "p" y les asigna la funcion al evento onclick
	$("p").dblclick(function(){
		//esconde el elemento que se nombra antes
		//hide(velocidad,,funcion que se ejecuta cuando termine el hide)
		$(this).hide("slow","swing",function(){
			$(this).show(2000);
		});
	});

	//Se pone la funcion sin paréntesis así no se ejecuta si no queremos
	$("p").mouseenter(cambiaFondoGris);

	$("p").mouseleave(cambiaFondoBlanco);
}

function cambiaFondoGris(){
	$(this).css("background-color","grey");
}

function cambiaFondoBlanco(){
	$(this).css("background-color","white");
}