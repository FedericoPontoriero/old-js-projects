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

const coupons = [
    {
        name: "Juan_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];
const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert(`El cupón ${userCouponValue} no es válido`);
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
