const panels = document.querySelectorAll('.panel'); // Captura todo lo que tiene la class panel en una Nodelist, parecida a un array

panels.forEach(panel => 
{ // Recorre la lista
    panel.addEventListener('click', () => 
    { // Escucha el click y corre una función
        removeActiveClasses(); // Ejecuta la función
        panel.classList.add('active'); // Agrega la clase active
    })
});

function removeActiveClasses()
{
    panels.forEach(panel => 
    { // Remueve el active
        panel.classList.remove('active');
    })
};

// Test