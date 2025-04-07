/*Animación texto inicio*/

document.addEventListener('DOMContentLoaded', () => {
    const texto = document.querySelector('.texto');

    function checkVisibility() {
        const rect = texto.getBoundingClientRect(); 
        const windowHeight = window.innerHeight; 

        if (rect.top >= windowHeight * 0.25 && rect.top <= windowHeight * 0.85) {
            texto.classList.add('animate__fadeInRight');
            texto.classList.remove('animate__fadeOut')
        } else {
            texto.classList.add('animate__fadeOut');
            texto.classList.remove('animate__fadeInRight');
            
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});

/*Animación tip*/

document.addEventListener('DOMContentLoaded', () => {
    const tipElements = document.querySelectorAll('.tip_1');

    function checkVisibility() {
        tipElements.forEach(tip_1 => { 
            const rect = tip_1.getBoundingClientRect(); 
            const windowHeight = window.innerHeight; 
            
            if (rect.top >= windowHeight * 0.25 && rect.top <= windowHeight * 0.75) {
                tip_1.classList.add('animate__zoomIn');
                tip_1.classList.remove('animate__zoomOut');
            } else {
                tip_1.classList.add('animate__zoomOut');
                tip_1.classList.remove('animate__zoomIn');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});

/*Animación SobreNosotros*/
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.tituloQuienes, .imagenQuienes, .textoQuienes');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top >= 0 && rect.top <= windowHeight) {
                if (!element.classList.contains('animate__fadeInDown')) {
                    element.style.visibility = 'visible';
                    element.classList.add('animate__fadeInDown'); // 
                }
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});


