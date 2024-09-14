
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

// Auto slide every 3 seconds
let autoSlide = setInterval(() => {
    showSlide(slideIndex + 1);
}, 3000);

// Reset auto sliding when manually changed
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        showSlide(slideIndex + 1);
    }, 3000);
}

// Attach reset to buttons
document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
    resetAutoSlide();
});

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
    resetAutoSlide();
});
