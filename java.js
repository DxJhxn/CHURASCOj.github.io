let indice = 0;

function mostrarImagen() {
    const imagenes = document.querySelector('.imagenes');
    const totalImagenes = document.querySelectorAll('.imagenes img').length;

    indice = (indice + 1) % totalImagenes; 
    imagenes.style.transform = `translateX(-${indice * 100}%)`; 
}

setInterval(mostrarImagen, 3000); 
