const btns = document.querySelector(".controls");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");

const slideCount = slide.length;
const slideWidth = 200;
const margin = 30;
console.log(slideCount);

let currentIndex = 0;
const makeClonde = () => {
  for (let i = 0; i < slideCount; i++) {
    const clone = slide[i].cloneNode(true);
    // cloneNode(true) = 복제한다
    clone.classList.add("clone");
    slides.appendChild(clone);
  }

  for (let i = slideCount - 1; i >= 0; i--) {
    const clone = slide[i].cloneNode(true);
    clone.classList.add("clone");
    slides.prepend(clone);
  }
  updateWidth();
  setInitialPostion();
  setTimeout(() => {
    slides.classList.add("animate");
  }, 100);
};

const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  console.log(newSlideCount);
  const newWidth = `${(slideWidth + margin) * newSlideCount - margin}px`;
  console.log(newWidth);
  slides.style.width = newWidth;
  // 복제된 후의 너비를 가져오기위해서 선언한다
};

const setInitialPostion = () => {
  const initialTranslateValue = ` ${-(slideWidth + margin) * slideCount}`;
  console.log(initialTranslateValue);
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

makeClonde();

const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + margin)}px`;
  currentIndex = num;

  if (currentIndex === slideCount || currentIndex === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animate");
      slides.style.left = "0px";
      currentIndex = 0;
    }, 500);
  }

  setTimeout(() => {
    slides.classList.add("animate");
  }, 600);
};

nextBtn.addEventListener("click", () => {
  moveSlide(currentIndex + 1);
});
prevBtn.addEventListener("click", () => {
  moveSlide(currentIndex - 1);
});

let Timer = undefined;
const autoSlide = () => {
  if (Timer === undefined) {
    setInterval(() => {
      moveSlide(currentIndex + 1);
    }, 3000);
  }
};

autoSlide();

const stopSlide = () => {
  clearInterval(Timer);
  Timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});
slides.addEventListener("mouseleave", () => {
  autoSlide();
});
btns.addEventListener("mouseenter", () => {
  stopSlide();
});
btns.addEventListener("mouseleave", () => {
  autoSlide();
});
