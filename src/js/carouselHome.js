document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
// Récupérez la référence du conteneur du carrousel
const carousel = document.getElementById('carousel');

carousel.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchendX < touchstartX) {
        nextSlide();
    }
    
    if (touchendX > touchstartX) {
        prevSlide();
    }
}

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
        updateDots(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
        updateDots(currentIndex);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            showSlide(i);
            currentIndex = i;
            updateDots(i);
        });
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');
    updateDots(currentIndex);

    // Swipe functionality
    let touchstartX = 0;
    let touchendX = 0;

    carousel.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
    });

    function handleGesture() {
        if (touchendX < touchstartX) {
            nextSlide();
        }
        
        if (touchendX > touchstartX) {
            prevSlide();
        }
    }
});

