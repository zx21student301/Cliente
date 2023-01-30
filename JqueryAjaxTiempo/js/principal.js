$(principal)

let UrlDatos = "";

function principal(){

	$.ajax({
		url: "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/28161/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlcmljLmZyYW5jaXNjby5rbnVjaGVsQGdtYWlsLmNvbSIsImp0aSI6IjNjOGQ2NzE2LTQxNDAtNDg4OC04ZjhhLTY0MTZmYjVjN2QwNSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjc1MDYzODA3LCJ1c2VySWQiOiIzYzhkNjcxNi00MTQwLTQ4ODgtOGY4YS02NDE2ZmI1YzdkMDUiLCJyb2xlIjoiIn0.jQy_XMbhR1TxZUhZVLMjNkNXI8ZAbv00stIBSdBsSGE",
	}).done(function (response) {
	  UrlDatos = response.datos;
	  console.log(UrlDatos)
	  $.ajax({
	  	url:UrlDatos,
	  }).done(function (response){
	  	let responseJSON = $.parseJSON(response)
	  	console.log(responseJSON);
	  	console.log(responseJSON[0].nombre);
	  	console.log(responseJSON[0].prediccion.dia[1].fecha)
	  })
	});
}