$(principal)

let UrlDatos = "";
const diasSemana = [
	'dom',
	'lun',
	'mar',
	'mié',
	'jue',
	'vie',
	'sáb',
  ];

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
			rellenarTabla(responseJSON);
		})
	});
}

function rellenarTabla(dat){
	let arrayDias = dat[0].prediccion.dia;
	for (let index = 0; index < arrayDias.length; index++) {
		let fecha = arrayDias[index].fecha
		$("#row_fecha").append(
			`<td colspan="2">${diasSemana[new Date(fecha).getDay()]}  ${new Date(fecha).getDate()}</td>`
		)

		$('#row_tiempo').append(
			`<td colspan="2"><img src="https://www.aemet.es/imagenes/png/estado_cielo/${arrayDias[index].estadoCielo[0].value}_g.png"></td>`
		)

		$("#row_temp_titulos").append(
			`<td id="row_temp_titulo_min">Tª mínima</td>
			<td id="row_temp_titulo_max">Tª máxima</td>`
		)

		$("#row_temp").append(
			`<td id="row_temp_min">${arrayDias[index].temperatura.minima}</td>
			<td id="row_temp_max">${arrayDias[index].temperatura.maxima}</td>`
		)
	}
}