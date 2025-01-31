// Iterable 객체 & 반복문을 지배하는 자가 자바스크립트의 중급단계를 지배한다

// 기본형 반복문
// for 문

// for(초기값; 조건식; 증감문){
//   반복문실행
// }

// const students = ["Park", "Kim", "Lee"];
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 !== 0) {
    document.write("<p class='red'>" + i + "</p>");
  } else if (i % 7 === 0 && i % 5 !== 0) {
    document.write("<p class='green'>" + i + "</p>");
  } else if (i % 5 === 0 && i % 7 === 0) {
    document.write("<p class='aqua'>" + i + "</p>");
  }
}
const reds = document.querySelectorAll(".red");
console.log(reds);
reds.forEach((red) => {
  red.style.color = "#f00";
});
const greens = document.querySelectorAll(".green");
greens.forEach((green) => {
  green.style.color = "green";
});
const aquas = document.querySelectorAll(".aqua");
aquas.forEach((aqua) => {
  aqua.style.color = "aqua";
});
