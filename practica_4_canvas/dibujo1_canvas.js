var texto = document.getElementById("caja_texto_lineas");
var boton = document.getElementById("boton_click");

boton.addEventListener("click", dibujarPorClick);

var d = document.getElementById("dibujitoc");
var ancho = d.width;
var lienzo = d.getContext("2d");

//funcion con parametros
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.moveTo(xinicial, yinicial);
   lienzo.lineTo(xfinal, yfinal);
   lienzo.stroke();
   lienzo.closePath();
}

function dibujarPorClick()
{
    var lineas = parseInt(texto.value);
    var li = 0;
    var yi, xf;
    var xi, yf;
    var espacios = ancho / lineas;
    var colorcito_superior = "#80B";
    var colorcito_inferior = "#33D";
    var colorcito_borde = "#FDD";

//Era while, se cambio por ciclo for
//variable = 0, mientras que la variable sea menor que lineas, sumarle 1,
//lineas superior
for(li = 0; li < lineas; li++)
{
    xi = espacios * li;
    yf = espacios * (li +1);
    dibujarLinea(colorcito_superior, xi, 0, 300, yf);
}
//lineas arriba
for(li = 0; li < lineas; li++ )  
{
    yi = espacios * li;
    xf = espacios * (li + 1);
    dibujarLinea(colorcito_inferior, 0, yi, xf, ancho);
    console.log("Linea " + 1);
}
//para comprobar en la consola, cuantas líneas son
//lineas alrededor del dibujo, lineas individuales
dibujarLinea(colorcito_borde, 1, 1, ancho, 1);
dibujarLinea(colorcito_borde, 1, 1, 1, ancho);
dibujarLinea(colorcito_borde, 1, 299, 299, ancho);
dibujarLinea(colorcito_borde, 299, 1, 299, ancho);
}
