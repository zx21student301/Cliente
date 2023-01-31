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
	  	$.ajax({
	  		url:UrlDatos,
	  	}).done(function (response){
	  		let responseJSON = $.parseJSON(response)
			console.log(responseJSON);
			rellenarTabla(responseJSON);
			crearGrafico(responseJSON);
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

		let contador = 0;

		while(arrayDias[index].estadoCielo[contador].value == ''){
			contador ++;
		}

		$('#row_tiempo').append(
			`<td colspan="2"><img src="https://www.aemet.es/imagenes/png/estado_cielo/${arrayDias[index].estadoCielo[contador].value}_g.png"></td>`
		);		

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

function crearGrafico(d){

	let grafLineas = $("#graficoLineas")

	Chart.defaults.global.defaultFontFamily = "Lato";
	Chart.defaults.global.defaultFontSize = 18;

	var lineChart = new Chart(grafLineas, {
		type: 'line',
		data: speedData,
		options: chartOptions
	});

	var speedData = {
		labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
		datasets: [{
			label: "Car Speed",
			data: [0, 59, 75, 20, 20, 55, 40],
			lineTension: 0,
			fill: false,
			borderColor: 'orange',
			backgroundColor: 'transparent',
			borderDash: [5, 5],
			pointBorderColor: 'orange',
			pointBackgroundColor: 'rgba(255,150,0,0.5)',
			pointRadius: 5,
			pointHoverRadius: 10,
			pointHitRadius: 30,
			pointBorderWidth: 2,
			pointStyle: 'rectRounded'
		  }]
	};
	var chartOptions = {
		legend: {
		  display: true,
		  position: 'top',
		  labels: {
			boxWidth: 80,
			fontColor: 'black'
		  }
		}
	};
}