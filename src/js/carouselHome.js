document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

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
    const minSwipeDistance = 50; // La distance minimale de glissement pour déclencher le changement de diapositive

    const carousel = document.getElementById('carousel');

    carousel.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
    });

    carousel.addEventListener('mousedown', function(event) {
        isDragging = true;
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    carousel.addEventListener('mousemove', function(event) {
        if (isDragging) {
            event.preventDefault();
        }
    });

    carousel.addEventListener('mouseup', function(event) {
        if (isDragging) {
            const distanceX = event.clientX - mouseX;
            const distanceY = event.clientY - mouseY;
            if (Math.abs(distanceX) >= minSwipeDistance && Math.abs(distanceX) > Math.abs(distanceY)) {
                if (distanceX < 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
            isDragging = false;
        }
    });

    carousel.addEventListener('mouseleave', function(event) {
        isDragging = false;
    });

    function handleGesture() {
        const distanceX = touchendX - touchstartX;
        if (Math.abs(distanceX) >= minSwipeDistance) {
            if (touchendX < touchstartX) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
});
