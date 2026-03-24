const loginFrom = document.getElementById('login-form');
const loginError = document.getElementById('loginError');
const passwordInput = document.querySelector('#password');
const toggleBtn = document.querySelector('#togglePassword');
const icon = toggleBtn.querySelector('i');

loginFrom.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value;

    if (username === 'mario calderon' && password === '1234') {
        localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'todo.html';
       
    } else {
        loginError.textContent = 'Usuario o Contraseña incorrectos';
        loginError.style.display = 'block';
        passwordInput.value = '';
    }
});

toggleBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';

    icon.classList.toggle('bi-eye');
    icon.classList.toggle('bi-eye-slash');
});
