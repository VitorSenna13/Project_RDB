// ES6

const nav = document.querySelector('.navbar');

const onScroll = () => {
    const scrollPosition = window.scrollY;

    nav.classList.toggle('scrolled-down', scrollPosition > 56);
};

document.addEventListener('scroll', onScroll, { passive: true });