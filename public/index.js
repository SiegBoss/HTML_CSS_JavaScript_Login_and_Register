// Obtenemos los elementos necesarios
var buttonRegister = document.getElementById("regster");
var form = document.querySelector(".login-register");
var buttonLogin = document.getElementById("login");

// Agregamos el evento al botón de registro
buttonRegister.addEventListener("click", function () {

    // Rotamos el formulario
    form.style.transform = "rotateY(180deg)";
    // Ocultamos el botón de registro
    buttonRegister.style.display = "none";
    // Mostramos el botón de inicio de sesión
    buttonLogin.style.display = "block";
});


// Agregamos el evento al botón de inicio de sesión
buttonLogin.addEventListener("click", function () {

    // Rotamos el formulario
    form.style.transform = "rotateY(0deg)";
    // Ocultamos el botón de inicio de sesión
    buttonLogin.style.display = "none";
    // Mostramos el botón de registro
    buttonRegister.style.display = "block";
});


window.onload = function() {

    document.getElementById("login").style.display = "none";

};
