// Lightbox para imagens dos projetos
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const projectImages = document.querySelectorAll('.project-image');

// Abrir lightbox ao clicar na imagem
projectImages.forEach(img => {
    img.addEventListener('click', function() {
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
    });
});

// Fechar lightbox
lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Fechar ao clicar fora da imagem
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
        lightbox.style.display = 'none';
    }
});