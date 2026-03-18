

const logoutBtn = document.getElementById('logout-btn');

export const logout = () =>{
logoutBtn.addEventListener('click', ()=>{
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
});
}