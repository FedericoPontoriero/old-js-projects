// Trae los elementos del dom
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles =  document.querySelectorAll('.circle');

let currentActive = 1;

function update() // Actualiza el dom
{
    circles.forEach((circle, index) => { // Recorre circles agrega y quita 'active'
        if (index < currentActive)
        {
            circle.classList.add('active');
        }
        else
        {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active'); // Trae los '.active'
    
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'; // Modifica el widht de la línea para que coincida con el progreso

    if (currentActive === 1) // Activa o desactiva los botones next y prev
    {
        prev.disabled = true;
    }
    else if (currentActive === circles.length)
    {
        next.disabled = true;
    }
    else
    {
        prev.disabled = false;
        next.disabled = false;
    }
};
// Escucha los clicks y actualiza el dom
next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length)
    {
        currentActive = circles.length;
    }

    update()
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1)
    {
        currentActive = 1;
    }
    
    update()
});