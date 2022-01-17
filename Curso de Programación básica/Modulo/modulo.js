let numeros = 100;
let divisible = false;
for(let i = 0; i <= 100; i ++ )
{
    divisible = false;
    if(i % 3 == 0) //if(esDivisible(i,3))
    {
        document.write("fizz");
        divisible = true;
    }
    if(i % 5 == 0) //if(esDivisible(i,5))
    {
        document.write("buzz"); 
        divisible = true;
    }
    if(!divisible) //También se puede hacer poniendo if(i%3 != 0 && i%5 !=0) o if(!esDivisible(i,3) && !esDivisible(i,5))
    {
        document.write(i);
    }
    document.write("<br />");
}
function esDivisible(numero, divisor)
{
    if(numero % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}