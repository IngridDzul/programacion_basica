document.addEventListener("keydown", moverVaca);
document.addEventListener("keydown", dibujarTeclado)
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var x = 50;
var y = 10;

var xVaca = 10;
var yVaca = 10;

var xCerdo = 20;
var yCerdo = 20;

var fondo = {
    nombreurl: "tile.png",
    cargarOK: false
};

var vaca = {
    nombreurl: "vaca.png",
    cargarOK: false
};

var cerdo = {
    nombreurl: "cerdo.png",
    cargarOK: false
};

var pollito = {
   nombreurl: "pollito.png",
   cargarOK: false 
};

var cantidad = 1;

fondo.imagen = new Image();
fondo.imagen.src = fondo.nombreurl;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.nombreurl;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.nombreurl;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollito.imagen = new Image();
pollito.imagen.src = pollito.nombreurl;
pollito.imagen.addEventListener("load", cargarPollitos);

//funciones

function cargarFondo()
{
    fondo.cargarOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargarOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargarOK = true;
    dibujar();
}

function cargarPollitos()
{
    pollito.cargarOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargarOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargarOK)
    {
        console.log(cantidad);
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(1, 2);
            var y = aleatorio(1, 2);
            var x = x * 80;
            var y = y * 80;
            
            papel.drawImage(vaca.imagen, x, y);
        }      
    }
    if(cerdo.cargarOK)
    {
        for(var c=0; c < cantidad; c++)
        {
            var x = aleatorio(1, 2);
            var y = aleatorio(1, 2);
            var x = x * 80;
            var y = y * 80;
            papel.drawImage(cerdo.imagen, x, y);
        }  
    }
    if(pollito.cargarOK)
    {
        papel.drawImage(pollito.imagen, 100, 10)
    }
}
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var movimiento = 10;

dibujarLinea("blue", x-1, y-1, x+1, y+1, papel); //punto de arranque

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.lineWidth = 8;
   lienzo.moveTo(xinicial, yinicial);
   lienzo.lineTo(xfinal, yfinal);
   lienzo.stroke();
   lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var movimiento = 20;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea("blue", x, y, x, y - movimiento, papel);
            y = y - movimiento;
            console.log("arriba");
        break;
        case teclas.DOWN:
            dibujarLinea("blue", x, y, x, y + movimiento, papel);
            y = y + movimiento;
            console.log("abajo");
        break;
        case teclas.LEFT:
            dibujarLinea("blue", x, y, x - movimiento, y, papel);
            x = x - movimiento;
            console.log("izquierda");
        break;
        case teclas.RIGHT:
            dibujarLinea("blue", x, y, x + movimiento, y, papel);
            x = x + movimiento;
            console.log("derecha");
        break;
    }
       
}

function moverVaca(evento)
{
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            yVaca = yVaca - movimiento;
            dibujar(xVaca, yVaca);
            console.log("arriba");
        break;
        case teclas.DOWN:
            yVaca = yVaca + movimiento;
            dibujar(xVaca, yVaca);
            console.log("abajo");
        break;
        case teclas.LEFT:
            yVaca = yVaca - movimiento;
            dibujar(xVaca, yVaca);
            console.log("izquierda");
        break;
        case teclas.RIGHT:
            yVaca = yVaca + movimiento;
            dibujar(xVaca, yVaca);
            console.log("derecha");
        break;
    }
       
}

function moverCerdo(evento)
{
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            yCerdo = yCerdo - movimiento;
            dibujar(xCerdo, yCerdo);
            console.log("arriba");
        break;
        case teclas.DOWN:
            yVaca = yVaca + movimiento;
            dibujar(xVaca, yVaca);
            console.log("abajo");
        break;
        case teclas.LEFT:
            yVaca = yVaca - movimiento;
            dibujar(xVaca, yVaca);
            console.log("izquierda");
        break;
        case teclas.RIGHT:
            yVaca = yVaca + movimiento;
            dibujar(xVaca, yVaca);
            console.log("derecha");
        break;
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
    return resultado;
}