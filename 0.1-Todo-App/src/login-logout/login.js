


const loginFrom = document.getElementById('login-from');

loginFrom.addEventListener('submit', (e) =>{
    e.defaultPrevented();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === 'Mario Calderon' && password === '0000'){
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'app.html';
    }else {
        alert('Usuario o Contraseña incorrectos');
    }
});