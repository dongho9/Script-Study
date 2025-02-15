// const userInput = prompt("이름을 입력하세요");
// console.log(typeof userInput);

// 예외조항처리 : 조건문을 실행하기에 앞서서 조건식 자체가 성립될 수 없는 값이 들어온다면 더이상의 조건문을 실행시키지 않게하자

// if (userInput === "" || userInput === null) {
//   console.log("값이 없습니다");
// } else {
//   alert(`${userInput}님 환영합니다`);
// }

// const score = prompt("내 인생 점수를 입력하세요");

// 중첩 if 조건문
// if (score !== null || score !== "") {
//   if (Number(score) >= 90) {
//     alert("굿");
//   } else if (Number(score) > 80) {
//     alert("낫뱃");
//   } else {
//     alert("열심히 해");
//   }
// }

// 짝수 홀수를 구분하는 if 조건문
// let num01 = prompt("숫자를 입력하세요");

// if (num01 !== null || num01 != "") {
//   num01 = Number(num01);
//   // if (num01 % 2 === 0) {
//   //   alert(`${num01}은 짝수입니다.`);
//   // } else {
//   //   alert(`${num01}은 홀수입니다.`);
//   // }
//   num01 % 2 === 0
//     ? alert(`${num01}은 짝수입니다.`)
//     : alert(`${num01}은 홀수입니다.`);
// }

const webpage = prompt(
  "네이버, 구글, 다음 중 즐겨사용하는 사이트는 어디인가요"
);

let url;
switch (webpage) {
  case "네이버":
    url = "https://www.naver.com";
    break;
  case "구글":
    url = "https://www.google.com";
    break;
  case "다음":
    url = "https://www.daum.net";
    break;
  default:
    alert("보기 중에 존재하지 않는 사이트입니다.");
}

if (url) {
  window.location.href = url;
}
