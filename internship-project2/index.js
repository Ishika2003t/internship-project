let counter = 1;
Array.from(document.querySelectorAll("input[type=radio]")).forEach((item, index) => {
    item.addEventListener("click", () => {
        counter = index + 1; // Update the counter to match the clicked radio button
        document.getElementById('radio' + counter).checked = true;
    updateIndicators(counter);
    updateCaption(counter);
 // Update the slide to reflect the current counter
    });
});

function updateIndicators(counter) {
    Array.from(document.querySelector('div.navigation-manual').children).forEach((indicator, index) => {
        if (index === counter - 1) {
            indicator.style.backgroundColor= "white";
        } else {
            indicator.style.backgroundColor="transparent";
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