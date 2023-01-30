CREATE TABLE Resultados (
	id int NOT NULL AUTO_INCREMENT,
	equipoLocal varchar(255) NOT NULL,
	equipoVisitante varchar(255) NOT NULL,
	golesLocal int NOT NULL,
	golesVisitante int NOT NULL,
	PRIMARY KEY (id)
);