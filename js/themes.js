/*
const inputTheme = document.querySelector('.navbar .contLinks .inputTheme');
const seletor = document.querySelector('.navbar .contLinks .inputTheme .elementsTheme .seletor');

const inputThemeMobile = document.querySelector('.navbar .contLinks .inputThemeMobile');

inputTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        seletor.classList.add('seletorDark');
    }else {
        seletor.classList.remove('seletorDark');
    }
});

inputThemeMobile.addEventListener('click', () => {

    if(document.body.classList.contains('dark')){

        if(seletor.classList.contains('seletorDark')){
            seletor.classList.remove('seletorDark');
        }

        document.body.classList.remove('dark');

    }else {

        if(seletor.classList.contains('seletorDark') === false){
            seletor.classList.add('seletorDark');
        }

        document.body.classList.add('dark');
    }

});
*/




let theme = 1;


window.addEventListener('load', () => {
    if (theme === 1) {
        document.body.classList.add('dark');
    }
})