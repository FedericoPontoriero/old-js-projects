let vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d");
let fondo = {
    url: "tile.png",
    cargaOK: false
};
fondo.objeto = new Image();
let vaca = {
    url: "vaca.png",
    cargaOK: false
};
vaca.objeto = new Image();
let pollo = new Image();
let cerdo = new Image ();
fondo.objeto.src = fondo.url;
vaca.objeto.src = vaca.url;
pollo.src = "pollo.png";
cerdo.src = "cerdo.png";
fondo.objeto.addEventListener("load", cargarFondo);
vaca.objeto.addEventListener("load", cargarVacas);
pollo.addEventListener("load", cargarPollos);
cerdo.addEventListener("load", cargarCerdos);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas()
{
    vaca.cargaOK = true;
}
function cargarPollos()
{

}
function cargarCerdos()
{

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
        papel.drawImage(fondo.objeto, 0, 0);
    }
    if(vaca.cargaOK)
    {
        papel.drawImage(vaca.objeto, 0, 0);
    }
}