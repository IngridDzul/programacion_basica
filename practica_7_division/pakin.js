var imagenes = [];      //diccionario de imagenes
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollito.png";
imagenes["Tocinauro"] = "cerdo.png";

class Pakiman
{
    constructor(n, v, a)
    {
        this.imagen = new Image();  //imagen al documento
        this.nombre = n;
        this.vida = v;
        this.ataque = a; 
        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<br /><strong>" + this.nombre + "</strong><br />");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.ataque + "<hr />");
    }
}

//var cauchin = new Pakiman("Cauchin", 100, 30);
//var pokacho = new Pakiman("Pokacho", 80, 50);
//var tocinauro = new Pakiman("Tocinauro", 120, 40);
//pokacho.mostrar(); uno por uno

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
