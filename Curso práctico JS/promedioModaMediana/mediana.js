const lista1 = [100, 1000, 500, 400000];



let listaOrdenada = lista1.sort((a, b) => a - b);

let mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero)
{
    if(numero % 2 === 0)
    {
        return true
    }
    else
    {
        return false
    }
}
function calcularMediana ()
{
    let mediana;
    if(esPar(listaOrdenada.length))
    {
        const elemento1 = listaOrdenada[mitadLista1 - 1];
        const elemento2 = listaOrdenada[mitadLista1];
        const promedioElementos = (elemento1 + elemento2) / 2;
        mediana = promedioElementos;
    }
    else
    {
        mediana = listaOrdenada[mitadLista1];
    }
}
