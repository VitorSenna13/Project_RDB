const hamburger = document.querySelector('.navbar .config .hamburger');
const menuMobile = document.querySelector('.menuMobile');
const buttonExit = document.querySelector('.menuMobile .contHeader .buttonExit');

hamburger.addEventListener('click', ()=> {
    menuMobile.classList.add('menuMobileActived');
    document.body.classList.add('menuMobileScroll');
})

buttonExit.addEventListener('click', ()=> {
    menuMobile.classList.remove('menuMobileActived');
    document.body.classList.remove('menuMobileScroll');
})