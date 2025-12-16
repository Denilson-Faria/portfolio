
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
scrollReveal(); 

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    }
});