let trilho = document.getElementById('trilho');
let container = document.querySelector('.container'); 
let iconLight = document.getElementById('icon-light');
let iconDark = document.getElementById('icon-dark');
let logoHeader = document.getElementById('logo-header'); // Pegando a imagem pelo ID

// Caminho das imagens
let lightModeImage = "imagens/CETEC.png"; // Imagem do modo claro
let darkModeImage = "imagens/CETEC_dark.png"; // Imagem do modo escuro (adicione a imagem correspondente)

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark');
    container.classList.toggle('dark');

    // Troca de ícones
    if (trilho.classList.contains('dark')) {
        iconLight.style.display = 'none';
        iconDark.style.display = 'inline';
        
        // Troca para a imagem do modo escuro
        logoHeader.src = darkModeImage;
    } else {
        iconLight.style.display = 'inline';
        iconDark.style.display = 'none';

        // Troca para a imagem do modo claro
        logoHeader.src = lightModeImage;
    }
});
