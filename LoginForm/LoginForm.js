document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    
    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Evita el envío del formulario
        window.location.href = '../Home/Home.html'; // Realiza la redirección
    });
});
