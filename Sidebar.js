
let titulosAccordion = document.querySelectorAll('.accordion-title');
let titulosPerfilAccordion = document.querySelectorAll('.accordionPerfil-title');


const addAccordionFunctionality = (titulos) => {
    titulos.forEach((titulo) => {
        let painel = titulo.nextElementSibling;

        titulo.addEventListener('click', () => {
            if (painel.style.display === 'block') {
                painel.style.display = 'none';
            } else {
                painel.style.display = 'block';
            }
        });
    });
};

addAccordionFunctionality(titulosAccordion);
addAccordionFunctionality(titulosPerfilAccordion);
