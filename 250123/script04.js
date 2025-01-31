// 시간과 관련있는 자바스크립트의 내장함수

// 일정 시간마다 반복하는 함수 = setInterval()

// const hello = () => {
//   console.log("하위");
// };
// setInterval(hello, 3000);

// 밀리초 => 1초 1000밀리초
// 반복적인 실행을 멈추게하는 함수 = clearInterval()

// let counter = 0;
// let timer = setInterval(() => {
//   console.log("으악");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 3000);

// console.log(timer);

// 특정 시간이 경과후 무언가를 실행시키게하는 함수 setTimeout()

setTimeout(() => {
  console.log("하위");
}, 3000);
