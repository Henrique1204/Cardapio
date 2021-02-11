export default () => {
    const spanHorario = document.querySelector('span[data-horario]');
    const abre = document.querySelector('[data-horario="abre"]')?.innerText.replace(/\D/g, '');
    const fecha = document.querySelector('[data-horario="fecha"]')?.innerText.replace(/\D/g, '');

    if (spanHorario && abre && fecha) {
        const hora = new Date().getHours();
        const isAberto = hora >= abre && hora < fecha;

        spanHorario.setAttribute('data-horario', isAberto ? 'aberto' : 'fechado');
    }
};
