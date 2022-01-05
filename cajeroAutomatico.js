class Billete
{
    constructor(v,c, )
    {
        this.valor = v;
        this.cantidad = c;
    }
}

let extraer = document. getElementById("boton");
let caja = [];
let entregado = [];
let div = 0;
let papeles = 0;
let dinero = 0;
let resultado = document.getElementById("resultado");

caja.push(new Billete(100, 4, ));
caja.push(new Billete(50, 3, ));
caja.push(new Billete(20, 2, ));
caja.push(new Billete(10, 2, ));
caja.push(new Billete(5, 5, ));
extraer.addEventListener("click", loop);

function loop()
{
    let t = document.getElementById("monto");
    dinero = parseInt(t.value);
    for(let b of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / b.valor);
            if(div > b.cantidad)
            {
                papeles = b.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push(new Billete(b.valor, papeles));
            dinero -= (b.valor * papeles);
        }
    }
    if(dinero > 0)
    {
        resultado.innerHTML = "No es posible extraer la cantidad deseada. Intente de nuevo";
    }
    else
    {
        for(e of entregado)
        {
            if(e.cantidad > 0)
            {
                resultado.innerHTML += e.cantidad + " billetes de $ " + e.valor + "<br />"
            }
        }        
    }
}
// Comentario random y al pedo