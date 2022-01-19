/*
    Analizando los salarios de Colombia
*/

//Obteniendo los salarios
const obtenerSalarios = arreglo =>{
    return arreglo.map( ele =>{
        return ele.salary;
    })
};

//Ordenando los salarios
const ordenarSalarios = obtenerSalarios(colombia).sort((elementoA, elementoB) =>{
    return elementoA - elementoB;
});

/* 
    Calculando la Mediana 
*/
const esPar = arreglo =>{
    if(arreglo.length % 2 === 0){
        return true
    }else{
        return false
    }
}

const obtenerMedio = array => {
    return parseInt((array.length) / 2);
}

let $mediana = 0;

const mediana = array => {
    if(esPar(array)){
        let valorActual = array[obtenerMedio(array)];
        let valorAnterior = array[obtenerMedio(array) - 1];
        $mediana = ( valorActual + valorAnterior ) / 2;
    }else{
        $mediana = array[obtenerMedio(array)];
    }
    return $mediana;
}

console.log(`La mediana es: ${mediana(ordenarSalarios)}`);