document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email-input');
    const nameInput = document.getElementById('name-input');
    const userInput = document.getElementById('user-input');
    const passwordInput = document.getElementById('password-input');
    const dateInput = document.getElementById('date-input');
    const form = document.getElementById('registration-form');
    const emailError = document.getElementById('email-error');
    const nameError = document.getElementById('name-error');
    const userError = document.getElementById('user-error');
    const passwordError = document.getElementById('password-error');
    const dateError = document.getElementById('date-error');
    const createAccountButton = document.getElementById('createAccountButton');
    const modal = document.getElementById('myModal');

    function updateCreateAccountButton() {
        const emailValue = emailInput.value.trim();
        const nameValue = nameInput.value.trim();
        const userValue = userInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const dateValue = dateInput.value.trim();
        const isEmailValid = isValidEmail(emailValue);

        emailError.textContent = isEmailValid ? '' : 'Correo inválido. Debe contener un "@" y un "."';
        nameError.textContent = nameValue ? '' : 'El nombre completo es requerido.';
        userError.textContent = userValue ? '' : 'El nombre de usuario es requerido.';
        passwordError.textContent = passwordValue ? '' : 'La contraseña es requerida.';
        dateError.textContent = dateValue ? '' : 'La fecha es requerida.';

        const hasErrors = emailError.textContent || nameError.textContent || userError.textContent || passwordError.textContent || dateError.textContent;
        createAccountButton.disabled = hasErrors;
    }

    emailInput.addEventListener('input', updateCreateAccountButton);
    nameInput.addEventListener('input', updateCreateAccountButton);
    userInput.addEventListener('input', updateCreateAccountButton);
    passwordInput.addEventListener('input', updateCreateAccountButton);
    dateInput.addEventListener('input', updateCreateAccountButton);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!createAccountButton.disabled) {        
            modal.style.display = 'block';

            setTimeout(function () {
                modal.style.display = 'none';
                window.location.href = './LoginForm/LoginForm.html';
            }, 2500);
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
