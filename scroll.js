// Seleciona todos os elementos com a classe .scroll-reveal
const reveals = document.querySelectorAll(".scroll-reveal");

function scrollReveal() {
    reveals.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight - 100) {
            element.classList.add("reveal");
        }
    });
}

window.addEventListener("scroll", scrollReveal);
scrollReveal(); // rodar ao carregar a página
