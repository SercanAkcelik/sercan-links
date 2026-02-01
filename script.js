document.addEventListener('DOMContentLoaded', () => {
    
    // Typing Effect Configuration
    const textElement = document.getElementById('typing-text');
    const phrases = [
        "Software Developer",
        "Full Stack Engineer",
        "Tech Enthusiast",
        "Content Creator"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Faster when deleting
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // Normal typing speed
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Finished typing phrase, pause before deleting
            isDeleting = true;
            typeSpeed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, switch to next phrase
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Start Animation
    setTimeout(typeEffect, 1000);

    // Subtle 3D Tilt Effect on Cards (Optional - Desktop only)
    if (window.matchMedia("(min-width: 768px)").matches) {
        const cards = document.querySelectorAll('.link-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });
    }
});
