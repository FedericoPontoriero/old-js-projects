//const array = document.getElementsByName("inputArray[]");
//lista = array.value;
let lista = [1,2,3,1,2,3,3,3,4,3,3,2,3,3,4];
const listaCount = {};
    
    lista.map
    (
        function (elemento)
        {
            if (listaCount[elemento]) 
            {
                listaCount[elemento] += 1;
            }
            else
            {
                listaCount[elemento] = 1;
            }
        }
        );
        const listaArray = Object.entries(listaCount).sort
        (
            function (elementoA, elementoB)
            {
                return elementoA[1] - elementoB[1];
            }
            );
            
            const moda = listaArray[listaArray.length -1];
            console.log(`La moda del conjunto de números es ${moda[0]}, que se repite ${moda[1]} veces`);
            //return resultado.textContent = `La moda de ese conjunto de números es ${moda}`;