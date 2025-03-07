const canvas = document.querySelector("canvas");
const toolBar = document.querySelector("#toolBar");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolBar.offsetHeight;
const canvasOffsetY = canvas.offsetTop;
const ctx = canvas.getContext("2d");
let isDrawing = false;
let startX;
let startY;
let lineWidth = 2;

toolBar.addEventListener("change", (e) => {
  if (e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "width") {
    ctx.lineWidth = e.target.value;
  }
});
toolBar.addEventListener("click", (e) => {
  if (e.target.id === "reset") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});
canvas.addEventListener("mousemove", (e) => {
  if (isDrawing === false) return;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});
