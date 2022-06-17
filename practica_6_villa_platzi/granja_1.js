
//Primera version de un videojuego
var villap = document.getElementById("villaplatzi");  //Traer el html
var papel = villap.getContext("2d");
var mapa = "tile.png"; //Traer imagen mapa

//Crear objetos
var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", dibujarVacas);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarCerdos);

var pollito = new Image();
pollito.src = "pollito.png";
pollito.addEventListener("load", dibujarPollitos);


function dibujar()
{
    papel.drawImage(fondo, 0, 10);
}

function dibujarVacas()
{
    papel.drawImage(vaca, 50, 30);
}

function dibujarCerdos()
{
    papel.drawImage(cerdo, 100, 60);
}

function dibujarPollitos()
{
    papel.drawImage(pollito, 200, 80);
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
    return resultado;
}