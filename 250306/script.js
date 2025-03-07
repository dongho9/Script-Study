const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d"); // 2D 렌더링 컨텍스트 가져오기
// fillStyle = "rgb(200, 0 ,0)"; 색상 설정s
// strokeStyle 선 색상
// fillRect(10, 10, 50, 100);(x, y, width, height)
// strokeRect (x, y, width, height)
// clearRect (x, y, width, height)

// canvas 초기화

// context 생성
// canvas 위에 그림을 그리기 위한 환경요소들의 집합체

// 사각형 그리기
// ctx.fillStyle = "rgb(87, 133, 185)";
// ctx.strokeStyle = "#000";
// ctx.fillRect(10, 10, 200, 200);
// ctx.strokeRect(10, 10, 200, 200);

// ctx.fillStyle = "#00f";
// ctx.fillRect(50, 50, 120, 120);
// ctx.clearRect(70, 80, 80, 45);

// 삼각형 그리기
// 지금부터 그림을 그릴거야 = beginPath()
// 직선경로를 설정할 때 => lineTo(x, y);
// 설정한 직선경로를 그리고 싶을 때 => stroke()
// 설정 및 그린 직선경로들을 활용해서 어떤 도형이 생성되었을 때 그 안에 색상을 넣고자 한다면 => fill()
// 현재 그림을 그리고 있는 위치에서 경로를 이동하고자 할 때, moveTo()
// 현재 작업중인 그리기가 끝났다 = closePath()

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// // ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "rgb(0, 200, 0)";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "rgb(0, 200, 0)";
// ctx.fill();

//원 및 호 만들기
// arc(x, y, r, startAngle, endAngle, counterClockMiser = true = 반시계 방향)
// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, 2 * Math.PI, true);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "#ff0";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, Math.PI, true);
// ctx.arc(280, 100, 50, 0, Math.PI, false);
// ctx.fillStyle = "#f00";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 200, 50, Math.PI * 0.5, Math.PI * 1.5, false);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, Math.PI / 3, false);
// ctx.stroke();

// 타원 그리기
// ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterClockMiser = true = 반시계 방향)

// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
// ctx.strokeStyle = "#f00";
// ctx.stroke();

// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, Math.PI / -6, 0, Math.PI * 2);
// ctx.strokeStyle = "#00f";
// ctx.stroke();

// ctx.beginPath();
// ctx.save();
// ctx.scale(1, 0.7);
// ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
// ctx.stroke();
// ctx.restore();

// ctx.beginPath();
// ctx.arc(200, 150, 30, 0, Math.PI * 2, true);
// ctx.stroke();

// 곡선 그리기
// TTF : 2차 배지에 // OTF : 3차 배지에
// 2차 배지에 : quadraticCurveTo()
// 3차 배지에 : bezierCurveTo() (첫번째 x조절점, 첫번째 y조절점, 두번째 x조절점, 두번째 y조절점, 최종 종착점 x, 최종 종착점 y)
// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
// ctx.stroke();

// 특정 경로값을 저장하고 가져와서 사용하고자 할 때
// new Path2D()
const triangle = new Path2D();
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

const circle = new Path2D();
circle.arc(200, 155, 50, 0, Math.PI * 2, true);
ctx.fillStyle = "#0f0";
ctx.fill(circle);
ctx.stroke(triangle);
