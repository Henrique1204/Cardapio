import SlideNav from './slide.js';

const checarHorario = () => {
    const spanHorario = document.querySelector('span[data-horario]');
    const abre = document.querySelector('[data-horario="abre"]')?.innerText.replace(/\D/g, '');
    const fecha = document.querySelector('[data-horario="fecha"]')?.innerText.replace(/\D/g, '');

    if (spanHorario && abre && fecha) {
        const hora = new Date().getHours();
        const isAberto = hora >= abre && hora < fecha;

        spanHorario.setAttribute('data-horario', isAberto ? 'aberto' : 'fechado');
    }
};

checarHorario();

const handleSlide = () => {
    const { matches } = window.matchMedia('(max-width: 750px');
    const wrapper = document.querySelector('[data-slide-wrapper]');
    const slide = document.querySelector('[data-slide]');

    if (matches) {
        wrapper.classList.add('slide-wrapper');
        slide.classList.add('slide');
        slide.classList.remove('container');

        const slideNav = new SlideNav('.slide', '.slide-wrapper');
        slideNav.iniciar();
    } else {
        wrapper.classList.remove('slide-wrapper');
        slide.classList.remove('slide');
        slide.classList.add('container');
    }
};

handleSlide();
window.addEventListener('resize', handleSlide);
