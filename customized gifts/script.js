const imageList = document.getElementById('image-list');
const images = document.querySelectorAll('.image-item');
const totalImages = images.length;
let index = 0;

function showNextImage() {
    index = (index + 1) % totalImages;
    updateSlider();
}

function showPreviousImage() {
    index = (index - 1 + totalImages) % totalImages;
    updateSlider();
}

function updateSlider() {
    imageList.style.transform = `translateX(${-index * 100}%)`;
}

document.getElementById('slide-btn-right').addEventListener('click', showNextImage);
document.getElementById('slide-btn-left').addEventListener('click', showPreviousImage);

setInterval(showNextImage, 3000); 



let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

if (slides.length !== 0) {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "flex";  // Change from "block" to "flex"
        dots[slideIndex - 1].className += " active";
    }

    prev.addEventListener("click", () => {
        plusSlides(-1);
    });

    next.addEventListener("click", () => {
        plusSlides(1);
    });
}
