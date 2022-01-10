function perimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    lados = input.value;
    resultadoPerimetroCuadrado = lados * 4;
    resultadoCuadrado.textContent = `El perímetro del cuadrado es: ${resultadoPerimetroCuadrado} cm`;
}
function areaCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    lados = input.value;
    resultado = lados**2;
    resultadoCuadrado.textContent = `El área del cuadrado es ${resultado} cm^2`;
}
function perimetroRectangulo()
{
    const input1 = document.getElementById("inputRectangulo1");    
    const input2 = document.getElementById("inputRectangulo2");
    let base = input1.value;
    let altura = input2.value;
    resultado = base * 2 + altura * 2;
    resultadoRectangulo.textContent = `El perímetro del rectángulo es ${resultado} cm`;
}
function areaRectangulo()
{
    const input1 = document.getElementById("inputRectangulo1");    
    const input2 = document.getElementById("inputRectangulo2");
    let base = input1.value;
    let altura = input2.value;
    resultado = base * altura;
    resultadoRectangulo.textContent = `El área del rectangulo es ${resultado} cm^2`;
}
function perimetroTriangulo()
{
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    let cateto1 = input1.value;
    let cateto2 = input2.value;
    let hipotenusaCuadrado = cateto1**2 + cateto2**2;
    let hipotenusa = Math.sqrt(hipotenusaCuadrado);
    console.log(hipotenusa);
    resultado = Number(cateto1) + Number(cateto2) + Number(hipotenusa);
    resultadoTriangulo.textContent = `El perímetro del triángulo es ${resultado} cm`;
}
function areaTriangulo()
{
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    let base = input1.value;
    let altura= input2.value;
    resultado = (base * altura) / 2;
    resultadoTriangulo.textContent = `El área del triángulo es ${resultado} cm^2`;
}
function perimetroCirculo()
{
    const input = document.getElementById("inputCirculo");
    let radio = input.value;
    resultado = radio * 2;
    resultadoCirculo.textContent = `El perímetro del círculo es ${resultado} cm`;
}
function areaCirculo()
{
    const input = document.getElementById("inputCirculo");
    let radio = input.value;
    resultado = Math.PI * (radio**2);
    resultadoCirculo.textContent = `El área del círculo es ${parseFloat(resultado.toFixed(4))} cm^2`
}
function areaTrianguloIsosceles(ladoA, ladoB, ladoBase)
{
    if (ladoA != ladoB)
    {
        resultado.TrianguloIsosceles = "El triángulo no es isósceles";
    }
    else
    {
        const baseRectangulo;
        const alturaTriangulo;
        baseRectangulo = ladoBase / 2;
        alturaTriangulo = Math.sqrt(ladoB**2 - baseRectangulo**2);
        resultado = (baseRectangulo * alturaTriangulo) / 2;
        resultado.TrianguloIsosceles = `El área del triángulo isósceles es ${parseInt(resultado)}`;
    }
}
areaTrianguloIsosceles(13, 13, 16);
