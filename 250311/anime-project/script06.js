const staggerWrap = document.querySelector("ul");
const [column, row] = [9, 5]; //9열 5행
const allElement = column * row;

for (let i = 0; i < allElement; i++) {
  const li = document.createElement("li");
  staggerWrap.appendChild(li);
}

const tl = anime.timeline({
  targets: "ul li",
  delay: anime.stagger(200, { grid: [9, 5], from: "center", axis: "z" }),
});
tl.add({
  scale: [
    {
      value: 0.1,
      easing: "easeOutSine",
      duration: 500,
    },
    { value: 1, easing: "easeOutQuad", duration: 1200 },
  ],
}).add({
  translateX: anime.stagger(10, { grid: [9, 5], from: "center", axis: "x" }),
  translateY: anime.stagger(10, { grid: [9, 5], from: "center", axis: "y" }),
  rotate: anime.stagger([0, 90], { grid: [9, 5], from: "center", axis: "x" }),
});
