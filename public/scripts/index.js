const buttonRegister = document.getElementById('register');
const buttonLogin = document.getElementById("login");

const buttonRegisterUser = document.getElementById("register-user");
const buttonLoginUser = document.getElementById("login-user");

const form = document.querySelector(".login-register");

const errorMessage = document.getElementById('error-message');


buttonRegister.addEventListener("click", function () {

    form.style.transform = "rotateY(180deg)";
    buttonRegister.style.display = "none";
    buttonLogin.style.display = "block";
});

buttonLogin.addEventListener("click", function () {

    form.style.transform = "rotateY(0deg)";
    buttonLogin.style.display = "none";
    buttonRegister.style.display = "block";
});

window.onload = function() {

    document.getElementById("login").style.display = "none";

};

// Obtén el formulario de registro
const registerForm = document.getElementById('register-form');

// Agrega un detector de eventos 'submit' al formulario de registro
registerForm.addEventListener('submit', async (event) => {
    // Previene el envío de formulario predeterminado
    event.preventDefault();

    const data = {
        username: document.getElementById('register-username').value,
        password: document.getElementById('register-password').value,
        email: document.getElementById('register-email').value,
    };

    const options = {
        method: 'POST',     
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    try {

        const response = await fetch('/register', options);

        if (!response.ok) {

            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        
    } catch (error) {
        console.error('Error:', error);
    }
});

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
        username: document.getElementById('login-username').value,
        password: document.getElementById('login-password').value,
    };

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    };

    try {
        const response = await fetch('/login', options);

        if (!response.ok) {

            const errorData = await response.json();
            errorMessage.textContent = errorData.error;
            throw new Error(`HTTP error! status: ${response.status}`);
            
        }

        // Redirige al usuario a otra página
        window.location.href = '../pages/solar_system.html';

    } catch (error) {
        console.error('Error:', error);
    }
});

