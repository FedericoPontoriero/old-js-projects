const items = [
	{ nombre: "Bicicleta", precio: 100 },
	{ nombre: "TV", precio: 200 },
	{ nombre: "Album", precio: 10 },
	{ nombre: "libro", precio: 5 },
	{ nombre: "Teléfono", precio: 500 },
	{ nombre: "Computadora", precio: 1000 },
	{ nombre: "Teclado", precio: 25 },
];

const filterItems = items.filter((item) => {
	return item.precio <= 100; // Nuevo array con esta condición
});

const itemNames = items.map((item) => {
	return item.nombre; // Devuelve sólo los nombres
});

const foundItem = items.find((item) => {
	return item.nombre === "Bicicleta"; // Devuelve el primero que cumple con la condición
});

items.forEach((item) => {
	console.log(item.nombre); // Por cada elemento ejecuta la función
});

const isCheap = items.some((item) => {
	return item.precio <= 100; // Devuelve true si un elemento cumple la condición
});

const everyCheap = items.every((item) => {
	return item.precio <= 100; // Devuelve true si todos los elementos cumplen la condición
});

const total = items.reduce((currentTotal, item) => {
	return item.precio + currentTotal; // Devuelve el total
}, 0); // 0 es el valor que tiene de inicio

const array2 = [1, 2, 3, 4, 5, 6];

const includesTwo = array2.includes(2); // Devuelve true si hay un elemento que coincide
