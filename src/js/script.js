import checarHorario from "./checarHorario.js";
import SlideNav from './slide.js';
import debounce from "./debounce.js";

checarHorario();

let slideExiste = false;

const handleSlide = () => {
    const { matches } = window.matchMedia('(max-width: 750px');
    const wrapper = document.querySelector('[data-slide-wrapper]');
    const slide = document.querySelector('[data-slide]');

    if (matches) {
        wrapper.classList.add('slide-wrapper');
        slide.classList.add('slide');
        slide.classList.remove('container');

        if (!slideExiste) {
            slideExiste = true;
            const slideNav = new SlideNav('.slide', '.slide-wrapper');
            slideNav.iniciar();
            slideNav.addEventoControle();
        }
    } else {
        wrapper.classList.remove('slide-wrapper');
        slide.classList.remove('slide');
        slide.classList.add('container');
    }
};

handleSlide();
window.addEventListener('resize', () => {
    debounce(handleSlide(), 200);
});
