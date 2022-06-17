var numeros = 100;
var divisible = false;

for(var i = 1; i <= 100; i++)
{
    if(esDivisible(i,3))
    {
        document.write("Fizz");     //escribir Fizz si da cero
    }
    if(esDivisible (i,5))   //entonces
    {
        document.write("Buzz");     //escribir buzz en lugar de #5
    }
    if(!esDivisible (i,3) && !esDivisible (i,5))    //si 3 y 5 es diferente de 0, entonces escribe
    {
        document.write(i);
    }
    document.write("<br/>");
}

function esDivisible(num, divisor)
{
    if(num % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
