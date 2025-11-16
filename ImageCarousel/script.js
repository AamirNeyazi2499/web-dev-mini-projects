const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots-container');


let currentSlide = 0;


function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            showSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
}

function showSlide(index) {

    slides.forEach(slide => slide.classList.remove('active'));
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    document.querySelectorAll('.dot')[index].classList.add('active');

    currentSlide = index;
}


function showNextSlide() {
    let nextIndex = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(nextIndex);
}

function showPrevSlide() {
    let prevIndex = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(prevIndex);
}

nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

createDots();
showSlide(0);