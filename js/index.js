AOS.init({
    duration: 1000,
    once: true
});

// Typewriter effect
const typewriterText = document.querySelector('.typewriter');
const text = typewriterText.textContent;
typewriterText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typewriterText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.sketch-card');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px) rotate(-1deg)`;
    });
});

// Random rotation for polaroids
document.querySelectorAll('.polaroid').forEach(polaroid => {
    const rotation = Math.random() * 10 - 5;
    polaroid.style.transform = `rotate(${rotation}deg)`;
});

// Glitch effect
setInterval(() => {
    const logo = document.querySelector('.logo');
    logo.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
    setTimeout(() => {
        logo.style.transform = 'translate(0)';
    }, 100);
}, 3000);