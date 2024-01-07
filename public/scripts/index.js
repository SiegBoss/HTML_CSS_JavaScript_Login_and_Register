// Elementos necesarios
const buttonRegister = document.getElementById('regster');
const buttonLogin = document.getElementById("login");
const buttonRegisterUser = document.getElementById("register-user");
const form = document.querySelector(".login-register");

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

buttonRegisterUser.addEventListener('click', async () => {

    const data = {

        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value,

    };
    const options = {

        method: 'POST',     
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    try {

        const response = await fetch('/addData', options);
        const json = await response.json();
        console.log(json);

    } catch (error) {

        console.error('Error:', error);
    }
});
