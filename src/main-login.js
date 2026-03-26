const iniciarSesionBtn = document.getElementById('iniciarSesion-btn');
const loginError = document.getElementById('loginError');
const passwordInput = document.querySelector('#password');
const toggleBtn = document.querySelector('#togglePassword');
const icon = toggleBtn.querySelector('i');
const resgistrarBtn = document.getElementById('resgistrarse');



resgistrarBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value;

    const userData = {
        username: username,
        password: password,
    }

    if (!username || !password) {
        loginError.textContent = 'Por favor completar todos los campos';
        return;
    }

    try {
        //esperamos la respuesta del fetch (la peticion)
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        //esperamos a que la respuesta se trasforme en JSON
        const data = await response.json();
        Swal.fire({
            toast: true,
            icon: 'success',
            title: 'Registro exitoso',
            confirmButtonText: 'OK'
        });

        document.getElementById('password').value = '';

    } catch (error) {
        loginError.textContent = 'Error en el registro';
        console.log(error);
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
})



iniciarSesionBtn.addEventListener('click', (e) => {
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

