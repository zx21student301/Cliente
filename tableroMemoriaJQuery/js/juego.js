$(crearTablero);

let volteadas = 0;
let par1 = "";
let par2 = "";

function crearTablero(){
	let cartas = 6;

	$("<div class='grid-container'>").appendTo("body");

	for (var i = 0; i < cartas; i++) {
		let dI = {
			class: "grid-item",
			id: i,
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

	$("</div>").appendTo("body");

	$(".imagenes").click(voltearCarta)
}

function voltearCarta(){
		let id = $(this).attr("id");

		let p1 = "img/rashoMakuin.jpg"
		let p2 = "img/mate.jpg"
		let p3 = "img/guido.jfif"

		if(volteadas != 2){
			switch(id){
				case "0":
					$(this).attr("src",p1);
					if($(this).attr("oculto") == "si"){
						volteadas++;
					}
					$(this).attr("oculto","no");
					break;
				case "1":
					$(this).attr("src",p2);
					if($(this).attr("oculto") == "si"){
						volteadas++;
					}
					$(this).attr("oculto","no");
					break;
				case "2":
					$(this).attr("src",p1);
					if($(this).attr("oculto") == "si"){
						volteadas++;
					}
					$(this).attr("oculto","no");
					break;
				case "3":
					$(this).attr("src",p3);
					if($(this).attr("oculto") == "si"){
						volteadas++;
					}
					$(this).attr("oculto","no");
					break;
				case "4":
					$(this).attr("src",p3);
					if($(this).attr("oculto") == "si"){
						volteadas++;
					}
					$(this).attr("oculto","no");
					break;
				case "5":
					$(this).attr("src",p2);
					if($(this).attr("oculto") == "si"){
						volteadas++;
					}
					$(this).attr("oculto","no");
					break;
			}
		}else if(volteadas == 2){

		}
}