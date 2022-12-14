class dbjCanvas{
	static dibujaRect(cnv,rctngl){
		let ctx = cnv.getContext("2d");
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(5, 5, 400, 600);

		//pintar el texto
		ctx.font = "20px Arial";
		ctx.fillStyle = "black";
		ctx.fillText("alto: "+rctngl.alto,150,50);
		ctx.fillText("ancho: "+rctngl.ancho,150,70);
		ctx.fillText("area: "+rctngl.area(),150,90);
		ctx.fillText("perimetro: "+rctngl.perimetro(),150,110);

		//pintar el rectangulo
		//calcular la esquina izquierda superior
		let esquinaX = 200 - (rctngl.ancho/2);
		let esquinaY = 400 - (rctngl.alto/2);

		console.log(esquinaY)
		console.log(esquinaX)  

		ctx.fillStyle = "red";
		ctx.fillRect(esquinaX,esquinaY,rctngl.ancho,rctngl.alto)

	}
}