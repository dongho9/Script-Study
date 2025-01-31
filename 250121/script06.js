// for (let i = 1; i <= 10; i++) {
//   if (i === 6) break; //종결
//   document.write(i, "<br/>");
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) continue; 이 조건은 그냥 넘김
//   document.write(i, "<br/>");
// }

// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}행 ${k}열`, "<br/>");
//   }
//   document.write("<br/>");
// }

// for()
// forEach()
const marvels = ["ironman", "herk", "captain", "stranger"];

// for (let i = 0; i < marvels.length; i++) {
//   console.log(marvels[i]);
// }

marvels.forEach(function (marvel, index, array) {
  //함수안에 함수 또 있다면 콜백함수
  console.log(marvel, index, array);
});
