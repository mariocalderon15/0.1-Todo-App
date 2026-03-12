


export const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', ()=>{
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
});