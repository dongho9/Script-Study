const section2Slider = document.querySelector(".slider_wrap");
const section2Title = document.querySelector("#sec2 .title");
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 2) {
      section2();
    }
    if (old_elem.index === 2) {
      section2Reset();
    }
  },
});

const section2 = () => {
  section2Slider.style.cssText = "opacity: 1; transform: translateX(-50px)";
  section2Title.style.cssText = "opacity: 1; transform: translateX(50px)";
};
const section2Reset = () => {
  section2Slider.style.cssText = "opacity: 0; transform: translateX(50px)";
  section2Title.style.cssText = "opacity: 0; transform: translateX(-50px)";
};
const nav_icon = document.querySelector("#nav_icon");
nav_icon.addEventListener("click", () => {
  document.body.classList.toggle("nav_active");
});
