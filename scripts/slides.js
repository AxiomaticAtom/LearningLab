let currentSlide;
let slidesFlag;
let slides;

function setSlides() {
  slides = document.getElementsByClassName("slide");
  currentSlide = 0;
}

function nextSlide() {
if (currentSlide < slides.length-1){
currentSlide++;
for (i=0; i<slides.length;i++) {
  slides[i].classList.add("hide")
}
slides[currentSlide].classList.remove("hide")
}
}

function prevSlide() {
if (currentSlide > 0){
currentSlide--;
for (i=0; i<slides.length;i++) {
  slides[i].classList.add("hide")
}
slides[currentSlide].classList.remove("hide")
}
}

