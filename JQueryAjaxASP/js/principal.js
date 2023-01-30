$(cargaInicial);

//almacenamos los elementos input
let elInput = $("#EquipoLocal");
let evInput = $("#EquipoVisitante");
let glInput = $("#golesLocal");
let gvInput = $("#golesVisitante");

//almacenamos el id del tr
let registro = "";
let registroAnterior = "";

//banderas para borrar o modificar
let borrado = ""
let modificado = ""

//asociamos al boton Enviar la funcion registraPartido
$("#btnEnv").click(registraPartido);

//asociamos al boton Modificar la funcion modificarPartido
$("#btnMod").click(modificarPartido);

//asociamos al boton Borrar la funcion borrarPartido
$("#btnBor").click(borrarPartido);

//asociamos al boton Limpiar la funcion limpiarFormulario
$("#btnLimp").click(limpiarFormulario);

//ejecuta una peticion de los datos de la base de datos con ajax
function cargaInicial(){
	$.post("py/cargaDatos.py",{}, cargarTabla);
	limpiarFormulario();
}

//carga los datos de la base de datos en la tabla
function cargarTabla(data, status){
	if(status == "success"){
		//introducir los datos que vienen en formato json a la tabla
		let dataJson = $.parseJSON(data);

		//tres formas de añadir los datos de la base de datos a la tabla
		//1.
			/*for (var i = 0; i < dataJson.length; i++) {
				$("#table_body").append(
					`<tr><td>${dataJson[i][0]}</td><td>${dataJson[i][1]}</td><td>${dataJson[i][2]}</td><td>${dataJson[i][3]}</td></tr>`
				)
			}*/
		//2.
			/*for (var i = 0; i < dataJson.length; i++) {
				$("#table_body").append(
					`<tr id="col-`+i+`">`
				)
				for (var j = 0; j < dataJson[i].length; j++) {
					$("#col-"+i).append(`<td>${dataJson[i][j]}</td>`)
				}
			}*/
		//3.
			for(dp of dataJson){
				crearFila(dp.id, dp.EquipLocal, dp.EquipVisitante, dp.golesLocal, dp.golesVisitante);
			}
	}
}

//ejecuta una peticion para introducir los datos a la base de datos
function registraPartido(){
	if (validarDatos){
		$.post("py/inserta.py",
			{
				EquipLocal: elInput.val(),
				EquipVisitante: evInput.val(),
				golesLocal: glInput.val(),
				golesVisitante: gvInput.val()
			},
			respuesta);
	}else{
		alert("Error en los datos");
	}
}

//introduce los datos a la base de datos
function respuesta(data, status){
	if(status == "success"){
		let dataJson = $.parseJSON(data);
		crearFila(dataJson[0][0], elInput.val(),evInput.val(),glInput.val(),gvInput.val());
	}
}

//valida que los dato introducidos en todos los campos del formulario sean correctos
function validarDatos(){
	//código para validar los datos
	//el y ev cadena de texto
	//gl y gv solo numeros
	return true;
}

//crea las filas de la tabla con los diferentes datos recibidos
function crearFila(fila,el,ev,gl,gv){
	$("#table_body").append(
			`<tr ondblclick="rellenaFormulario()" id="fila-${fila}"><td>${el}</td><td>${ev}</td><td>${gl}</td><td>${gv}</td></tr>`
	);
}

//rellena el formulario con los datos de la fila que hemos seleccionado
function rellenaFormulario(){
	registro = $(this.event.target).parent().attr("id");

	if (registroAnterior == ""){
		registroAnterior = registro;
		$("#"+registro).addClass("table-info");
	}else{
		seleccionado();
	}

	let celda = $(this.event.target).parent().children().first();

	elInput.val(celda.html());
	evInput.val(celda.next().html());
	glInput.val(celda.next().next().html());
	gvInput.val(celda.next().next().next().html());



	$("#btnEnv").prop("disabled",true);
	$("#btnMod").prop("disabled",false);
	$("#btnBor").prop("disabled",false);
}

//ejecuta una peticion para modificar datos de un id concreto en la base de datos y en la tabla HTML
function modificarPartido(){
	if (validarDatos){
		let divisionId = registro.split("-");

		let registroId = divisionId[1];

		borrado=""
		modificado="si"

		$.post("py/modificar.py",
			{
				idFila: registroId,
				EquipLocal: elInput.val(),
				EquipVisitante: evInput.val(),
				golesLocal: glInput.val(),
				golesVisitante: gvInput.val()
			},
			recargarTabla);
	}else{
		alert("Error en los datos");
	}
}

//ejecuta una peticion para borrar una fila con id concreto en la base de datos y en la tabla HTML
function borrarPartido(){
	let divisionId = registro.split("-");

	let registroId = divisionId[1];

	borrado="si"
	modificado=""

	$.post("py/borra.py",
		{
			idFila: registroId
		}
	,recargarTabla)
}

//borra o modifica un tr, vacia los inputs y borra las clases del tr
function recargarTabla(data,status){
	if(status == "success"){
		if(borrado == "si"){
			$("#"+registro).remove();
			limpiarFormulario();
		}else if(modificado == "si"){
			let dataJson = $.parseJSON(data);
			$("#"+registro).html(`<td>${dataJson[0][0]}</td><td>${dataJson[0][1]}</td><td>${dataJson[0][2]}</td><td>${dataJson[0][3]}</td>`)
			limpiarFormulario();
		}
		$("#"+registroAnterior).removeClass();
	}
}

//limpia los campos del formulario
function limpiarFormulario(){
	elInput.val("");
	evInput.val("");
	glInput.val("");
	gvInput.val("");

	$("#btnEnv").prop("disabled",false);
	$("#btnMod").prop("disabled",true);
	$("#btnBor").prop("disabled",true);

	$("#"+registroAnterior).removeClass();
}

//cambia la clase del elemento seleccionado y borra la del anteriormente seleccionado
function seleccionado(){
	if(registroAnterior != registro){
		$("#"+registroAnterior).removeClass();
		$("#"+registro).addClass("table-info");
		registroAnterior = registro;
	}
}