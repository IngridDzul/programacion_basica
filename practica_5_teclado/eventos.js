//linea de codigo desplegado, bloque de codigo
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
 var cuadrito = document.getElementById("area_de_dibujo");
 var papel = cuadrito.getContext("2d");
 var x = 100;
 var y = 100;

 //dibujarLinea("blue", 100, 100, 200, 200, papel);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.lineWidth = 4;
   lienzo.moveTo(xinicial, yinicial);
   lienzo.lineTo(xfinal, yfinal);
   lienzo.stroke();
   lienzo.closePath();
}

function dibujarTeclado(eventos)
{
    //if(eventos.keyCode == teclas.UP)
    {
        //console.log("tecla para arriba");
    }
    //console.log(eventos.keyCode);//visuzlizar la tecla oprimida

    var colorito = "black";
    var movimiento = 5;
    switch(eventos.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorito, x, y, x, y - movimiento, papel)
            y = y - movimiento
            console.log("arriba");
        break;
        case teclas.DOWN:
            dibujarLinea(colorito, x, y, x, y + movimiento, papel)
            y = y + movimiento
            console.log("abajo");
        break;
        case teclas.LEFT:
            dibujarLinea(colorito, x, y, x - movimiento, y, papel)
            x = x - movimiento
            console.log("A la izquierda");
        break;
        case teclas.RIGHT:
            dibujarLinea(colorito, x, y, x + movimiento, y, papel)
            x = x + movimiento
        break;
        default:
            console.log("Otra tecla");
        break;
    }
}