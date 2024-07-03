const leafImages = ['leaf_01.png', 'leaf_02.png', 'leaf_03.png', 'leaf_04.png'];
const leavesContainer = document.querySelector('.leaves');

function createLeaf() {
    const leaf = document.createElement('img');
    const leafType = leafImages[Math.floor(Math.random() * leafImages.length)];
    leaf.src = leafType;
    leaf.classList.add('leaf');
    
    const randomLeft = Math.random() * 100;
    const randomDuration = Math.random() * 5 + 3;
    leaf.style.left = `${randomLeft}%`;
    leaf.style.animationDuration = `${randomDuration}s`;

    leavesContainer.appendChild(leaf);

    leaf.addEventListener('animationend', () => {
        leaf.remove();
    });
}

setInterval(createLeaf, 2000);
const girlImage = document.createElement('img');
girlImage.src = 'girl.png';
girlImage.classList.add('cycling-girl');
document.body.appendChild(girlImage);

function animateGirl() {
    const girl = document.querySelector('.cycling-girl');
    let direction = 1; // 1 for left to right, -1 for right to left
    let position = -girl.width; // Start position off-screen to the left

    function moveGirl() {
        position += direction * 5; // Adjust this value to change speed

        if (position > window.innerWidth) {
            direction = -1;
            girl.style.transform = 'scaleX(1)'; // Flip the image
        } else if (position < -girl.width) {
            direction = 1;
            girl.style.transform = 'scaleX(-1)'; // Reset the flip
        }

        girl.style.left = `${position}px`;
        requestAnimationFrame(moveGirl);
    }

    moveGirl();
}

animateGirl();
