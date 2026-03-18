const loginFrom = document.getElementById('login-form');

loginFrom.addEventListener('submit', (e) =>{
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === 'mario calderon' && password === '1234'){
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'todo.html';
    }else {
        alert('Usuario o Contraseña incorrectos');
    }
});
