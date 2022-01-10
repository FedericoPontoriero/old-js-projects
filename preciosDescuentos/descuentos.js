function calcularPrecioConDescuento()
{
    const inputPrecio = document.getElementById("inputPrecio"); // precio antes del descuento
    const inputPorcentaje = document.getElementById("inputDescuento"); // porcentaje
    
    const precioInicial = inputPrecio.value;
    const descuentoPorcentaje = inputPorcentaje.value

    const decimal = descuentoPorcentaje / 100;
    const precioDespuesDescuento = precioInicial * (1 - decimal);
    resultado.textContent = `El precio final es: ${precioDespuesDescuento}$`;
}

