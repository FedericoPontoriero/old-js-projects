// Extrae el promedio ponderado de un conjunto de notas con sus respectivos créditos. Se obtiene multiplicando cada nota con su crédito correspondiente, se suma ese resultado y por último, se divide por la suma de todos los créditos.


// Primero se establece el conjunto con el que se va a trabajar
const notes =
[
    {
        course: "Educación física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas",
        note: 7,
        credit: 5,
    },
];

// Se recorre el array y se multiplica la nota obtenida con su correspondiente crédito
const notesWithCredit = notes.map(function (noteObject)
{
    return noteObject.note * noteObject.credit;
});

// Se suma el resultado anterior
const sumOfNotesWithCredit = notesWithCredit.reduce(function (sum = 0, newVal)
{
    return sum + newVal;
});

// Se recorre el array para obtener el valor de cada uno de los créditos
const credits = notes.map (function (noteObject)
{
    return noteObject.credit;
});

// Se suma el resultado obtenido
const sumOfCredits = credits.reduce (function (sum = 0, newVal)
{
    return sum + newVal;
});

// Se divide la suma de las notas con su crédito por la cantidad de créditos para obtener la moda ponderada del conjunto
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

