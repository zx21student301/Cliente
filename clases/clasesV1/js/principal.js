e1 = new Empleado("Juan","López Rodriguez", 45, 2000);
e2 = new Empleado("Ana","López Rodriguez", 35, 3000);

alert(e1.infoEmpleado());
console.log(e2.infoEmpleado());

//El setter se utiliza con un igual "="
e1.nombre = "Jorge";
alert(e1.infoEmpleado());