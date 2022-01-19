let loginForm = document.querySelector('.login-form');
let loginBtn = document.querySelector('#login-btn');
let closeBtn = document.querySelector('.close')

loginBtn.onclick = () =>{
    loginForm.classList.add('active');
}

closeBtn.onclick = () =>{
    loginForm.classList.remove('active');
}


let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menuBtn.onclick = () =>{
    
    navbar.classList.toggle('active');    
    menuBtn.classList.toggle('fa-times');
}

let header = document.querySelector('.header');

window.onscroll = () =>{
    navbar.classList.remove('active');    
    menuBtn.classList.remove('fa-times');

    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}