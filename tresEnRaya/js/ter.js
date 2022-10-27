onload=principal
let turno = true;
let cont = 0;
let ocupado = [0,0,0,
               0,0,0,
               0,0,0];
let ganador = false;

function principal() {
    turno = true;
    cont = 0;
    ocupado = [0,0,0,
               0,0,0,
               0,0,0];
    ganador = false;
    dibujarTablero();
}

function dibujarTablero() {
    //<div class="grid-item">x</div>

    let tablero = document.getElementById("tableroId");

    for(let index=0; index < 9; index++){
        
        let casilla = document.createElement("div");
        casilla.class="casilla";
        
        let imagen = document.createElement("img");
        imagen.setAttribute("id","imagen");
        imagen.setAttribute("src","img/blanco.png");
        imagen.setAttribute("onclick","pinchado(this,"+index+")");

        casilla.appendChild(imagen);

        tablero.appendChild(casilla);
    }

    let divR = document.createElement("div");
    divR.setAttribute("class","btnReset");
    divR.setAttribute("id","divRId");    
    
    let reset = document.createElement("button");
    reset.setAttribute("id","btnR");
    reset.setAttribute("onclick","resetear()");
    reset.innerHTML= "Resetear tablero";

    divR.appendChild(reset);

    document.body.appendChild(divR);
    
}

function pinchado(imagen,pos) {
    if(ganador == false){
         if(ocupado[pos] == 1 || ocupado[pos] == 2){
            console.log("Casilla ocupada");
        }else{
            if(turno){
                turnoX(imagen);
                turno=false;
                ocupado[pos] = 1;
            }else{
                turnoO(imagen);
                turno=true;
                ocupado[pos] = 2;
            }
            cont++;
                console.log(cont);
        }   
        if(cont >= 5){
            comprobarGanador();
        }
        if(cont == 9 && ganador == false){
            alert("empate")
            jugarDeNuevo(confirm("¿Quieres jugar de nuevo?"));
        }   
    }
}


function turnoX(imagen) {
    imagen.setAttribute("src","img/X.png");
}

function turnoO(imagen) {
    imagen.setAttribute("src","img/O.png");
}

function comprobarGanador() {
    if(ocupado[0] == 1 && ocupado[1] == 1 && ocupado[2] == 1){
        ganadorX();
    }else if(ocupado[3] == 1 && ocupado[4] == 1 && ocupado[5] == 1){
        ganadorX();
    }else if(ocupado[6] == 1 && ocupado[7] == 1 && ocupado[8] == 1){
        ganadorX();
    }else if(ocupado[0] == 1 && ocupado[3] == 1 && ocupado[6] == 1){
        ganadorX();
    }else if(ocupado[1] == 1 && ocupado[4] == 1 && ocupado[7] == 1){
        ganadorX();
    }else if(ocupado[2] == 1 && ocupado[5] == 1 && ocupado[8] == 1){
        ganadorX();
    }else if(ocupado[0] == 1 && ocupado[4] == 1 && ocupado[8] == 1){
        ganadorX();
    }else if(ocupado[2] == 1 && ocupado[4] == 1 && ocupado[6] == 1){
        ganadorX();
    }

    if(ocupado[0] == 2 && ocupado[1] == 2 && ocupado[2] == 2){
        ganadorO();
    }else if(ocupado[3] == 2 && ocupado[4] == 2 && ocupado[5] == 2){
        ganadorO();
    }else if(ocupado[6] == 2 && ocupado[7] == 2 && ocupado[8] == 2){
        ganadorO();
    }else if(ocupado[0] == 2 && ocupado[3] == 2 && ocupado[6] == 2){
        ganadorO();
    }else if(ocupado[1] == 2 && ocupado[4] == 2 && ocupado[7] == 2){
        ganadorO();
    }else if(ocupado[2] == 2 && ocupado[5] == 2 && ocupado[8] == 2){
        ganadorO();
    }else if(ocupado[0] == 2 && ocupado[4] == 2 && ocupado[8] == 2){
        ganadorO();
    }else if(ocupado[2] == 2 && ocupado[4] == 2 && ocupado[6] == 2){
        ganadorO();
    }

}

function ganadorX() {
    document.getElementById("ganador").innerHTML = "Gana X";
    ganador = true;
}

function ganadorO() {
    document.getElementById("ganador").innerHTML = "Gana O";
    ganador = true;
}

function resetear() {
    document.getElementById("tableroId").innerHTML="";
    document.getElementById("ganador").innerHTML="";

    turno = true;
    cont = 0;
    ocupado = [0,0,0,
               0,0,0,
               0,0,0];
    ganador = false;
    
    let tablero = document.getElementById("tableroId");

    for(let index=0; index < 9; index++){
        
        let casilla = document.createElement("div");
        casilla.class="casilla";
        
        let imagen = document.createElement("img");
        imagen.setAttribute("src","img/blanco.png");
        imagen.setAttribute("onclick","pinchado(this,"+index+")");

        casilla.appendChild(imagen);

        tablero.appendChild(casilla);
    }
}