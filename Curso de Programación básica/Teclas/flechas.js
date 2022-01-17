let teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);
console.log(keycode);

document.addEventListener("keydown", dibujarTeclado);
let cuadrito = document.getElementById("areaDeDibujo");
let papel = cuadrito.getContext("2d");
let x = 100;
let y = 100;
dibujarLinea("red", x - 1, x - 1, y + 1, y + 1, papel);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.lineWidht = 3;
        lienzo.moveTo(xinicial, yinicial);
        lienzo.lineTo(xfinal, yfinal);
        lienzo.stroke();
        lienzo.closePath();
    }
function dibujarTeclado(evento){
    let colorcito = "blue";
    let movimiento = 1;
    switch(evento.keyCode){
        case teclas.UP:
        dibujarLinea("blue", x, y, x, y - movimiento,papel);
        y = y - movimiento;
            break; 
        case teclas.DOWN:
        dibujarLinea("blue", x, y, x, y + movimiento, papel);
        y = y + movimiento;
            break;
        case teclas.LEFT:
        dibujarLinea("blue", x, y, x - movimiento, y, papel);
        x = x - movimiento;
            break;
        case teclas.RIGHT:
        dibujarLinea("blue", x, y , x + movimiento, y, papel);
        x = x + movimiento;
            break;
        default:
        
            break;
    }
}
