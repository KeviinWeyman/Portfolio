document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200, // Duración de la animación
    });
});


document.getElementById('contact-form').addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
        e.preventDefault();
    }
});


const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
