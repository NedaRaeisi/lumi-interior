const slides = document.querySelectorAll(".hero-slide");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");
const dots = document.querySelectorAll(".slider-dot");

let currentSlide = 0;


// نمایش اسلاید
function showSlide(index) {

    slides.forEach(function(slide) {
        slide.style.opacity = "0";
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    slides[index].style.opacity = "1";
    dots[index].classList.add("active");

    currentSlide = index;
}


// فلش راست
nextButton.addEventListener("click", function() {

    currentSlide = currentSlide + 1;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});


// فلش چپ
prevButton.addEventListener("click", function() {

    currentSlide = currentSlide - 1;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});


// نقطه‌ها
dots.forEach(function(dot, index) {

    dot.addEventListener("click", function() {
        showSlide(index);
    });

});


// تغییر خودکار عکس‌ها
setInterval(function() {

    currentSlide = currentSlide + 1;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 5000);


// اسلاید اول
showSlide(0);