// Elementos
const buttonRegister = document.getElementById('register');
const buttonLogin = document.getElementById("login");
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

const form = document.querySelector(".login-register");
const errorMessage = document.getElementById('error-message');

// Boton para mostrar el formulario de registro | Button to show the registration form
buttonRegister.addEventListener("click", function () {

    // Rotar el formulario 180 grados | Rotate the form 180 degrees
    form.style.transform = "rotateY(180deg)";
    // Ocultar el boton de registro | Hide the registration button
    buttonRegister.style.display = "none";
    // Mostrar el boton de inicio de sesión | Show the login button
    buttonLogin.style.display = "block";
});

// Boton para mostrar el formulario de inicio de sesión | Button to show the login form
buttonLogin.addEventListener("click", function () {

    // Rotar el formulario 180 grados | Rotate the form 180 degrees
    form.style.transform = "rotateY(0deg)";
    // Ocultar el boton de inicio de sesión | Hide the login button
    buttonLogin.style.display = "none";
    // Mostrar el boton de registro | Show the registration button
    buttonRegister.style.display = "block";
});

// Window.onload : Se ejecuta cuando la página se ha cargado | Executes when the page has loaded
window.onload = function() {

    // Ocultar el boton de inicio de sesión | Hide the login button
    document.getElementById("login").style.display = "none";

};


// addEventListener() : Ejecuta una función cuando se envía el formulario | Executes a function when the form is submitted
registerForm.addEventListener('submit', async (event) => {
    // preventDefault() : Previene que la página se recargue | Prevents the page from reloading
    event.preventDefault();

    const data = {
        username: document.getElementById('register-username').value,
        password: document.getElementById('register-password').value,
        email: document.getElementById('register-email').value,
    };

    const options = {

        // method : Método de envío de datos | Data submission method
        method: 'POST',     
        // headers : Tipo de datos que se envían | Type of data being sent
        headers: { 'Content-Type': 'application/json' },
        // body : Datos que se envían | Data being sent
        // JSON.stringify() : Convierte los datos a formato JSON | Converts the data to JSON format
        body: JSON.stringify(data)
    };

    try {

        // fetch() : Envía los datos a la ruta especificada | Sends the data to the specified route
        const response = await fetch('/register', options);

        // ok : Muestra un mensaje en caso de éxito | Shows a success message
        if (!response.ok) {

            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // json() : Convierte los datos a formato JSON | Converts the data to JSON format
        const json = await response.json();
        console.log(json);
        
    } catch (error) {
        console.error('Error:', error);
    }
});


// addEventListener() : Ejecuta una función cuando se envía el formulario | Executes a function when the form is submitted
// submit : Evento que se ejecuta cuando se envía el formulario | Event that executes when the form is submitted
loginForm.addEventListener('submit', async (event) => {
    
    // preventDefault() : Previene que la página se recargue | Prevents the page from reloading
    event.preventDefault();

    const data = {
        username: document.getElementById('login-username').value,
        password: document.getElementById('login-password').value,
    };

    const options = {
        // method : Método de envío de datos | Data submission method
        method: 'POST',
        // headers : Tipo de datos que se envían | Type of data being sent
        headers: { 'Content-Type': 'application/json' },
        // body : Datos que se envían | Data being sent
        body: JSON.stringify(data),
    };

    try {

        // fetch() : Envía los datos a la ruta especificada | Sends the data to the specified route
        const response = await fetch('/login', options);

        if (!response.ok) {

            // json() : Convierte los datos a formato JSON | Converts the data to JSON format
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

