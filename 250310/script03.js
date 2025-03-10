const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100, 100);

ctx.globalCompositeOperation = "xor";
// deatination-over 먼저 그려진 순서로 올림

// source 나중에 그려진 도형
// source-over 나중에 그려진 도형을 올림
// source-in 교차되는 영역만 살림
// source-out 교차되지 않는 영역만 살림
// source-atop 교차되지 않는 영역 제거

// destination은 source의 반대

// lighter 교차되는 영역을 밝게해줌
// darken 어두어짐
// copy 나중에 그려진 source만 출력
// xor 교차되는 영역 삭제
ctx.beginPath();
ctx.fillStyle = "#f00";
ctx.arc(180, 120, 50, 0, Math.PI * 2, false);
ctx.fill();
