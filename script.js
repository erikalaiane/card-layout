// Timer functionality
let seconds = 0;
const timerDisplay = document.querySelector('.timer');

function updateTimer() {
    seconds++;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

setInterval(updateTimer, 1000);

// Favorite button functionality
const favoriteButtons = document.querySelectorAll('.favorite-btn');

favoriteButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
        
        // Animation effect
        this.style.transform = 'scale(1.3)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Carousel dots simulation
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const dots = card.querySelectorAll('.dot');
    let currentDot = 0;
    
    setInterval(() => {
        dots[currentDot].classList.remove('active');
        currentDot = (currentDot + 1) % dots.length;
        dots[currentDot].classList.add('active');
    }, 3000);
});

// Reserve button interaction
const reserveButtons = document.querySelectorAll('.reserve-btn');

reserveButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const originalText = this.innerHTML;
        
        // Change button text temporarily
        this.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Reserved!
        `;
        
        // Reset after 2 seconds
        setTimeout(() => {
            this.innerHTML = originalText;
        }, 2000);
    });
});

// Save button interaction
const saveButton = document.querySelector('.save-btn');
let isSaved = false;

saveButton.addEventListener('click', function(e) {
    e.preventDefault();
    isSaved = !isSaved;
    
    if (isSaved) {
        this.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            Saved
        `;
        this.style.background = 'rgba(0, 0, 0, 0.05)';
    } else {
        this.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            Save for later
        `;
        this.style.background = 'transparent';
    }
});

// Card hover effect for image
const cardImages = document.querySelectorAll('.card-image');

cardImages.forEach(cardImage => {
    cardImage.addEventListener('mouseenter', function() {
        this.querySelector('img').style.transform = 'scale(1.05)';
    });
    
    cardImage.addEventListener('mouseleave', function() {
        this.querySelector('img').style.transform = 'scale(1)';
    });
});

// Smooth scroll animation on load
window.addEventListener('load', () => {
    document.querySelectorAll('.card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Parallax effect on scroll
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.card-image img');
            
            parallaxElements.forEach(el => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
            
            ticking = false;
        });
        ticking = true;
    }
});

// Console log for testing
console.log('🎨 Card Layout initialized!');
console.log('📊 Design Testing: Compare Card A vs Card B');