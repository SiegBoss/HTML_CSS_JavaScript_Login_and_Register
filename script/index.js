/* 
  Controla la lógica para mostrar formularios de login y registro, 
  alternar entre modo claro y oscuro, y mostrar/ocultar contraseñas.


  Handles logic for toggling login/register forms, 
  switching between light/dark mode, and showing/hiding passwords.
*/

// Elementos principales | Main elements
const loginBox = document.querySelector('.login');
const registerBox = document.querySelector('.register');
const toggleButton = document.getElementById('toggle-view');
const toggleDark = document.getElementById("toggle-dark");

// Mostrar formulario de login | Show login form
function showLogin() {
  loginBox.classList.add('active');
  registerBox.classList.remove('active');
  toggleButton.textContent = 'Registrarse';
}

// Mostrar formulario de registro | Show register form
function showRegister() {
  loginBox.classList.remove('active');
  registerBox.classList.add('active');
  toggleButton.textContent = 'Iniciar Sesión';
}

// Alternar entre login y registro | Toggle between login and register
toggleButton.addEventListener('click', () => {
  if (loginBox.classList.contains('active')) {
    showRegister();
  } else {
    showLogin();
  }
});

// Actualizar texto del botón de modo oscuro/claro | Update dark/light mode button text
function updateDarkButtonText() {
  const isDark = document.body.classList.contains("dark");
  toggleDark.textContent = isDark ? "Modo Claro ☀️" : "Modo Oscuro 🌑";
}

// Alternar modo oscuro y claro | Toggle dark and light mode
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateDarkButtonText();
});

// Alternar visibilidad de contraseña | Toggle password visibility
document.querySelectorAll('.toggle-password').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const targetId = toggle.getAttribute('data-target');
    const input = document.getElementById(targetId);

    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';

    // Cambiar ícono (puedes usar otros emojis o SVG si prefieres) | Change icon (you can use other emojis or SVGs if you prefer)
    toggle.textContent = isPassword ? '🙈' : '👁️';
  });
});

// Al cargar la página | On page load
updateDarkButtonText(); 
showLogin();             
