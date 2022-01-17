let vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdo);
let teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
let fondo = {
    url: "tile.png",
    cargaOK: false
};
fondo.imagen = new Image();
let vaca = {
    url: "vaca.png",
    cargaOK: false
};
vaca.imagen = new Image();
let pollo = {
    url: "pollo.png",
    cargaOK: false
};
pollo.imagen = new Image();
let cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

let xCerdo = 420;
let yCerdo = -15;


cerdo.imagen = new Image ();
fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
pollo.imagen.src = "pollo.png";
cerdo.imagen.src = "cerdo.png";
fondo.imagen.addEventListener("load", cargarFondo);
vaca.imagen.addEventListener("load", cargarVacas);
pollo.imagen.addEventListener("load", cargarPollos);
cerdo.imagen.addEventListener("load", cargarCerdos);
function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}
function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}
function aleatorio(min, max)
{
    let resultado
    resultado = Math.round(Math.random() * (max - min)) + min;
    return resultado;
}
function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        let x = aleatorio(0, 420);
        let y = aleatorio(0, 420);
        papel.drawImage(vaca.imagen, x, y);
    }
    if(pollo.cargaOK)
    {
        papel.drawImage(pollo.imagen, 200, 200);
    }
    if(cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen, 300, 300);
    }
}
function moverCerdo(pasos)
{
    let x = aleatorio(0, 420);
    let y = aleatorio(0, 420);
  let movimiento = 5;
  switch (pasos.keyCode)
  {
    case teclas.UP:
    dibujar();
    papel.drawImage(vaca.imagen, 200, 200);
      papel.drawImage(fondo.imagen, 0,0);
      papel.drawImage(cerdo.imagen, xCerdo, yCerdo - movimiento);
      yCerdo = yCerdo - movimiento;
    break;
    case teclas.DOWN:
    dibujar();
    papel.drawImage(vaca.imagen, 200, 200);
      papel.drawImage(fondo.imagen, 0,0);
      papel.drawImage(cerdo.imagen, xCerdo, yCerdo + movimiento);
      yCerdo = yCerdo + movimiento;
    break;
    case teclas.LEFT:
    dibujar();
    papel.drawImage(vaca.imagen, 200, 200);
      papel.drawImage(fondo.imagen, 0,0);
      papel.drawImage(cerdo.imagen, xCerdo - movimiento, yCerdo);
      xCerdo = xCerdo - movimiento;
    break;
    case teclas.RIGHT:
    dibujar();
    papel.drawImage(vaca.imagen, 200, 200);
      papel.drawImage(fondo.imagen, 0,0);
      papel.drawImage(cerdo.imagen, xCerdo + movimiento, yCerdo);
      xCerdo = xCerdo + movimiento;
    break;}
  }