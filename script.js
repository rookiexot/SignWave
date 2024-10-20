const texts = ["Hand Sign Identifier", "Gesture Recognition", "Enhancing Accessibility"];
let index = 0;
const typingText = document.querySelector('.typing-text span');

function type() {
    typingText.textContent = texts[index];
    index = (index + 1) % texts.length;
    setTimeout(type, 3000); // Change text every 3 seconds
}

document.addEventListener("DOMContentLoaded", type);