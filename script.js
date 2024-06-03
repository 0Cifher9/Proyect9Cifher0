function showSection(sectionId) {
    // Ocultar todas las secciones
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("¡Hola, Mundo! Este es un mensaje desde la consola.");
    // Mostrar la sección Home por defecto
    showSection('home');
});

