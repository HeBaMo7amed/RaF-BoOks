let loginForm = document.querySelector('.log-in-form')
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
}
document.querySelector('#close-login').onclick = () =>{
    loginForm.classList.remove('active')
}