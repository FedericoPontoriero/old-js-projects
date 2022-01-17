let d = document.getElementById("dibujito");
let texto = document.getElementById("texto_lineas");
let boton = document.getElementById("boton");
boton.addEventListener("click", dibujo_por_click );
let lienzo = d.getContext("2d");
let ancho = d.width;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xinicial, yinicial);
        lienzo.lineTo(xfinal, yfinal);
        lienzo.stroke();
        lienzo.closePath();
    }
function dibujo_por_click()
{
    lienzo.clearRect(0,0,300,300);
    let x = parseInt(texto.value);
    let lineas = x;
    let espacio = ancho / lineas;
    let l = 0;
    let yi, xf;
    let xi, yf;
    console.log(lienzo);
    for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        xi = 300 - (espacio * l);
        yf = 300 - (espacio * (l + 1));
        dibujarLinea("red", 1, yi, xf, 299);
        dibujarLinea("red", yi, 1, 299, xf);
        dibujarLinea("red", yi, 299, 299, yf);
        dibujarLinea("red", 1, xi, xf, 1);
    }
}