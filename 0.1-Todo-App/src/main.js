import './style.css'
// login.js

// Datos de usuario y contraseña (puedes cambiarlos o cargarlos desde un backend si es necesario)
const validUsername = "usuario123";
const validPassword = "contrasena123";

// Capturamos el formulario de login
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevenir el envío del formulario por defecto

  // Obtener los valores de los inputs
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validación simple
  if (username === validUsername && password === validPassword) {
    // Guardar el estado del usuario (opcional, si deseas mantener la sesión)
    localStorage.setItem("isLoggedIn", "true");

    // Redirigir al usuario a app.html (la página de tareas)
    window.location.href = "/app.html";
  } else {
    // Mostrar mensaje de error si los datos son incorrectos
    errorMessage.style.display = "block";
  }
});
