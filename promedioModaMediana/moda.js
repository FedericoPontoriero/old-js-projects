const array = document.getElementsByName("inputArray[]");
lista = array.value;
function calcularModa()
{

    
    const listaCount = {};
    
    [lista].map
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
            return resultado.textContent = `La moda de ese conjunto de números es ${moda}`;
        }