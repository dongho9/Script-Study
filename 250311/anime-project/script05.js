const staggerWrap = document.querySelector("ul");
const [column, row] = [9, 3]; //9열 3행
const allElement = column * row;

for (let i = 0; i < allElement; i++) {
  const li = document.createElement("li");
  staggerWrap.appendChild(li);
}

anime({
  targets: "ul li",
  easing: "linear",
  duration: 1000,
  scale: anime.stagger([0.5, 1], { grid: [9, 3], from: "center", axis: "z" }),
});
