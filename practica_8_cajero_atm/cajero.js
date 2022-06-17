class Billete
{
    constructor(vb, cb)
    {
        this.valorb = vb;
        this.cantidadb = cb;
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinerosolicitado = parseInt(t.value);

    for(var b of caja)
    {

        if(dinerosolicitado > 0)
        {
            div = Math.floor(dinerosolicitado / b.valorb);
            if(div > b.cantidadb)
            {
                papeles = b.cantidadb;
            }
            else
            {
                papeles = div;
            }

            dineroentregado.push( new Billete(b.valorb, papeles) );
            dinerosolicitado = dinerosolicitado - (b.valorb * papeles);
        }
    
    }


    if(dinerosolicitado > 0)
        {
            //console.log("No hay suficiente dinero");
            resultado.innerHTML = "No hay dinero suficiente";
        }
        else
        {
            for(var e of dineroentregado)
            {
                if(e.cantidadb)
                {
                    resultado.innerHTML += e.cantidadb + " billetes $" + e.valorb + "<br />";
                }
            }
            //console.log(dineroentregado);
        }
    
}
   

var caja = [];  //dinero disponible en el cajero
var dineroentregado = [];  //dinero que el cajero entrega
caja.push( new Billete(100, 4) );
caja.push( new Billete(50, 3) );
caja.push( new Billete(20, 2) );
caja.push( new Billete(5, 1) );


var dinerosolicitado = 0; //sera variable plana-ya no
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
