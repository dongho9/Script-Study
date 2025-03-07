const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// const img = new Image();
// img.addEventListener("load", () => {
//   ctx.drawImage(img, 100, 50, 200, 350, 160, 100, 200, 350);
// });
// img.src = "./images/cat.jpg";
// ctx.font = "60px Arial";
// ctx.fillText("Hello", 50, 70);
// ctx.strokeText("Hello", 50, 150);

// ctx.font = "Italic 60px Arial";
// ctx.fillText("Javascript", 50, 70);
// ctx.font = "Bold 60px Arial";
// ctx.fillText("Typescript", 50, 150);

// masking : 서로 다른 요솓들이 혼합되지 않도록 별개의 요소로 관리하기 위해 조치하는 행위
// cliping mask : 서로 다른 복수의 이미지 요소들을 원하는 좌표에 혼합해서 사용할 수 있도록 하는 행위, 기능

// const img = new Image();
// img.addEventListener("load", () => {
//   ctx.drawImage(img, 0, 0);
// });
// img.src = "./images/bird.jpg";
// ctx.beginPath();
// ctx.arc(400, 200, 150, Math.PI * 2, false);
// ctx.clip();

// ctx.globalAlpha = 0.3;
// ctx.fillStyle = "rgb(250, 0, 0)";
// ctx.fillRect(50, 50, 100, 50);

// ctx.fillStyle = "rgb(0, 0, 250)";
// ctx.fillRect(150, 50, 100, 50);

// ctx.fillStyle = "rgb(0, 255, 0)";
// ctx.fillRect(250, 50, 100, 50);

// ctx.fillStyle = "rgba(0, 0 , 255 ,.2)";
// ctx.fillRect(50, 50, 60, 50);

// ctx.fillStyle = "rgba(0, 0 , 255 ,.4)";
// ctx.fillRect(110, 50, 60, 50);

// ctx.fillStyle = "rgba(0, 0 , 255 ,.6)";
// ctx.fillRect(170, 50, 60, 50);

// ctx.fillStyle = "rgba(0, 0 , 255 ,.8)";
// ctx.fillRect(230, 50, 60, 50);

// ctx.fillStyle = "rgba(0, 0 , 255 ,1)";
// ctx.fillRect(290, 50, 60, 50);

// 그라디언트
// ctx.createLinearGradient(x1, y1, x2, y2)
// addColorStop(position, color)

// const linearGradient = ctx.createLinearGradient(0, 0, 0, 200);
// linearGradient.addColorStop(0, "#000");
// linearGradient.addColorStop(0.6, "#eee");
// linearGradient.addColorStop(1, "#fff");

// ctx.fillStyle = linearGradient;
// ctx.fillRect(0, 0, 100, 200);

ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.shadowBlur = 10;
const radialGradient = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radialGradient.addColorStop(0, "#fff");
radialGradient.addColorStop(0.4, "#ff0");
radialGradient.addColorStop(1, "#0ff");
ctx.fillStyle = radialGradient;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fill();

// const img = new Image();
// img.addEventListener("load", () => {
//   const pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
// });
// img.src = "./images/pattern.png";

// canvas API를 활용해서 선을 그린다고 했을 때 선의 마감처리는 3가지 중 하나로 선택 가능

// butt : 기본 디자인 => 단면처리
// round : 선 너비 = 두께의 1/2만큼을 반지름으로 하는 원을 선 양 쪽에 붙여넣는다
// square : 선 너비의 1/2만큼을 양 쪽 끝에 붙여넣는다.

// const lineCaps = ["butt", "round", "square"];
// const lineJoins = ["bevel", "miter", "round"];
// ctx.strokeStyle = "222";

// lineCaps.forEach((lineCap, index) => {
//   ctx.beginPath();
//   ctx.lineWidth = 20;
//   // ctx.lineCap = lineCaps[index];
//   ctx.lineJoin = lineJoins[index];
//   ctx.moveTo(60, 60 * index + 50);
//   ctx.lineTo(100, 60 * index + 15);
//   ctx.lineTo(140, 60 * index + 50);
//   ctx.stroke();
// });
