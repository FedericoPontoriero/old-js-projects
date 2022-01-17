let imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";

class Pakiman
{
    constructor(n, v, a, )
    {
        this.nombre = n;
        this.imagen = new Image();
        this.vida = v;
        this.ataque = a;
        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br />");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.ataque);
        document.write("</p>" + "<hr />");
    }
}
let coleccion = [];
coleccion.push(new Pakiman("cauchin", 100, 30, ));
coleccion.push(new Pakiman("pokacho", 80, 50, ));
coleccion.push(new Pakiman("tocinauro", 120, 40, ));
for(let p of coleccion) // También se puede usar in en vez de of
{
    p.mostrar();
}

