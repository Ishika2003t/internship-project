let counter = 1;
function updateIndicators(counter) {
    document.querySelectorAll('.navigation-auto div').forEach((indicator, index) => {
        if (index === counter - 1) {
            indicator.style.opacity = 1;
        } else {
            indicator.style.opacity = 0;
        }
    });
}

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();

});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
});

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    counter++;
    if (counter > slides.length) {
        counter = 1;
    }
    document.getElementById('radio' + counter).checked = true;
    updateIndicators(counter);
    updateCaption(counter);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    counter--;
    if (counter < 1) {
        counter = slides.length;
    }
    document.getElementById('radio' + counter).checked = true;
    updateIndicators(counter);
    updateCaption(counter);
}
function updateCaption(counter) {
    const captions = [
        "Switzerland",
        "China",
        "Capetown",
        "India"
    ];
    document.getElementById('caption-text').textContent = captions[counter - 1];
}