const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = Math.floor(Math.random() * 4) + 1;
  this.dy = Math.floor(Math.random() * 4) + 1;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  };

  this.animate = function () {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  };
}

// const circleOne = new Circle(100, 100, 50, "red");
// circleOne.draw();
// const circleTwo = new Circle(200, 200, 50, "blue");
// circleTwo.draw();

// x중심축, y중심축, 반지름, 색상 4개의 값이 랜덤으로 총 20개가 필요함
const objs = [];

for (let i = 0; i < 20; i++) {
  const radius = Math.floor(Math.random() * 50 + 10);
  const x = Math.random() * (canvas.width - radius * 2) + radius; //밖으로 나가는 영역을 보장
  const y = Math.random() * (canvas.height - radius * 2);
  const color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  objs.push(new Circle(x, y, radius, color));
}
// console.log(objs);
// objs.forEach((obj, i) => {
//   objs[i].draw();
// });
const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  objs.forEach((obj, i) => {
    objs[i].animate();
  });

  requestAnimationFrame(update);
};
update();
