const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let count = 0;

const bannerSlides = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsSlides = Array.from(document.querySelectorAll(".dot"));

const updateSlide = () => {
  if (bannerSlides && bannerTagLine) {
    bannerSlides.src = `./assets/images/slideshow/${slides[count].image}`;
    bannerTagLine.innerHTML = slides[count].tagLine;
    updatesDots(count);
  }
};

arrowLeft?.addEventListener("click", () => {
  count--;
  if (count < 0) count = slides.length - 1;
  updateSlide();
});

arrowRight?.addEventListener("click", () => {
  count++;
  if (count >= slides.length) count = 0;
  updateSlide();
});

function updatesDots(index) {
  dotsSlides.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

updateSlide();
