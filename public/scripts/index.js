const buttonRegister = document.getElementById('register');
const buttonLogin = document.getElementById("login");

const buttonRegisterUser = document.getElementById("register-user");
const buttonLoginUser = document.getElementById("login-user");

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
        const json = await response.json();
        console.log(json);

    } catch (error) {

        console.error('Error:', error);
    }
});


buttonLoginUser.addEventListener('click', async () => {

    const loginData = {
        username: document.getElementById('login-username').value,
        password: document.getElementById('login-password').value,
    };

    const loginOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
    };

    try {

        const loginResponse = await fetch('/login', loginOptions);
        const loginJson = await loginResponse.json();

        console.log(loginJson);

        if (loginResponse.ok) {

            console.log(loginData.message);

        } else {

            console.error(loginData.message);

        }
    } catch (error) {
        console.error('Error:', error);
    }
});