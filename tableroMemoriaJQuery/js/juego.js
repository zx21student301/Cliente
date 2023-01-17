$(crearTablero);
$(cartasRandom);

let volteadas = 0;
let par1 = "";
let par2 = "";
let id1 = "";
let id2 = "";
let parejas = [
	"img/rashoMakuin.jpg",
	"img/rashoMakuin.jpg",
	"img/francesco.jfif",
	"img/francesco.jfif",
	"img/mate.jpg",
	"img/mate.jpg"
	];

let parejasRandom = [];

function crearTablero(){
	let cartas = 6;

	for (var i = 0; i < cartas; i++) {
		let dI = {
			class: "grid-item",
		}

		let im = {
			class: "imagenes",
			id: i,
			oculto: "si",
			src: "img/interrogacion.png"
		}

		let divImg = $("<div>",dI);
		let img = $("<img>",im);
		
		$(divImg).append(img);
		$(".grid-container").append(divImg);
	}

	$(".imagenes").click(voltearCarta)
}

function cartasRandom(){
	parejasRandom = parejas.sort(function(){
		return Math.random() - 0.5;
	})
}

function voltearCarta(){
		let id = $(this).attr("id");

		if(volteadas != 2){
			switch(id){
				case "0":
					$(this).attr("src",parejasRandom[0]);
					if($(this).attr("oculto") == "si"){
						if(volteadas == 0){
							par1 = $(this).attr("src");
							id1 = "#"+$(this).attr("id");
						}else if (volteadas == 1){
							par2 = $(this).attr("src");
							id2 = "#"+$(this).attr("id");
						}
						volteadas++;
					}
					$(this).attr("oculto","no");
					break;
				case "1":
					$(this).attr("src",parejasRandom[1]);
					if($(this).attr("oculto") == "si"){
						if(volteadas == 0){
							par1 = $(this).attr("src");
							id1 = "#"+$(this).attr("id");
						}else if (volteadas == 1){
							par2 = $(this).attr("src");
							id2 = "#"+$(this).attr("id");
						}
						volteadas++;
					}
					$(this).attr("oculto","no");
					break;
				case "2":
					$(this).attr("src",parejasRandom[2]);
					if($(this).attr("oculto") == "si"){
						if(volteadas == 0){
							par1 = $(this).attr("src");
							id1 = "#"+$(this).attr("id");
						}else if (volteadas == 1){
							par2 = $(this).attr("src");
							id2 = "#"+$(this).attr("id");
						}
						volteadas++;
					}
					$(this).attr("oculto","no");
					break;
				case "3":
					$(this).attr("src",parejasRandom[3]);
					if($(this).attr("oculto") == "si"){
						if(volteadas == 0){
							par1 = $(this).attr("src");
							id1 = "#"+$(this).attr("id");
						}else if (volteadas == 1){
							par2 = $(this).attr("src");
							id2 = "#"+$(this).attr("id");
						}
						volteadas++;
					}
					$(this).attr("oculto","no");
					break;
				case "4":
					$(this).attr("src",parejasRandom[4]);
					if($(this).attr("oculto") == "si"){
						if(volteadas == 0){
							par1 = $(this).attr("src");
							id1 = "#"+$(this).attr("id");
						}else if (volteadas == 1){
							par2 = $(this).attr("src");
							id2 = "#"+$(this).attr("id");
						}
						volteadas++;
					}
					$(this).attr("oculto","no");
					break;
				case "5":
					$(this).attr("src",parejasRandom[5]);
					if($(this).attr("oculto") == "si"){
						if(volteadas == 0){
							par1 = $(this).attr("src");
							id1 = "#"+$(this).attr("id");
						}else if (volteadas == 1){
							par2 = $(this).attr("src");
							id2 = "#"+$(this).attr("id");
						}
						volteadas++;
					}
					$(this).attr("oculto","no");
					break;
			}
		}

		if(volteadas == 2){
			comprobarPareja();
		}
}

function comprobarPareja(){
	if(par1 == par2){
		id1=""
		id2=""
		par1=""
		par2=""
		volteadas=0
	}else{
		setTimeout(function(){
			$(id1).attr("src","img/interrogacion.png");
			$(id2).attr("src","img/interrogacion.png");
			$(id1).attr("oculto","si");
			$(id2).attr("oculto","si");
			id1=""
			id2=""
			par1=""
			par2=""
			volteadas=0
		}, 1000)
	}

	if($("[oculto = 'no']").length == parejas.length){
		setTimeout(function(){
			let conf = confirm("¿Quieres jugar de nuevo?");
			if(conf){
				$(".grid-container").empty();
				crearTablero();
				cartasRandom();
			}
		},1000)
	}
}