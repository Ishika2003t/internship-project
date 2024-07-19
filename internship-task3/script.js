// script.js

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.product-slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${( - index) * 100}%)`;
           // if(i===index ){slide.style.transform=`translateX(-100%)`}
        });
    }


    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});
