// 함수선언식
// function test(a, b) {
//   return a + b;
// }

// console.log(test(10, 30));

// // 익명함수 표현식
// const num = function (a, b) {
//   return a + b;
// };
// console.log(num(10, 20));

// // 화살표 함수
// const num01 = (a, b) => {
//   return a + b;
// };
// console.log(num01(10, 20));

// // 선언 & 호출 x => 선언 즉시실행
// (function (a, b) {
//   let result = a + b;
//   console.log(`함수 실행결과값 : ${result}`);
// })(100, 200);

// const hi = () => "안녕하세요";
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   console.log("클릭");
//   return () => {
//     console.log("클릭클릭");
//     return () => {
//       console.log("클릭클릭클릭");
//       return () => {
//         console.log("이제그만");
//       };
//     };
//   };
// });

const showData = (name, age) => {
  alert(`안녕하세요 ${name}님 나이가${age}이시군요`);
};

const getData = (callback) => {
  const userName = prompt("이름을 입력하세요");
  const userAge = prompt("나이를 입력하세요");
  callback(userName, userAge);
};

getData(showData);
