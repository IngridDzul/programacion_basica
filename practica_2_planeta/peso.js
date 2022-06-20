var usuario = prompt("¿Cual es tu peso?");
var planeta = prompt("Elige un planeta: \n1 es Marte \n2 es Jupiter")
var peso = parseInt(usuario);
var gravedad_tierra = 9.8;
var gravedad_marte = 3.7;
var gravedad_jupiter = 24.8;
var nombre_planeta;

var peso_final;

if (planeta == 1)
{
    peso_final = peso * gravedad_marte / gravedad_tierra;
    nombre_planeta = "Marte"
}
else if (planeta == 2)
{
    peso_final = peso * gravedad_jupiter / gravedad_tierra;
    nombre_planeta = "Jupiter"
}
else
{
    peso_final = 10000;
    nombre_planeta = "Kripton"
}

peso_final = parseInt(peso_final);
document.write("Tu peso en " + nombre_planeta + " es de: " + peso_final + " kg.")