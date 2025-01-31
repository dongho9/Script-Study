// 사용자에게 교통비, 식비, 음료비 3개의 값 입력받아서 적정지출비용 초과하는경우 "원 초과 지출 줄여주세요" 만약 초과하지않았으면 00원 유지 축하드립니다

// const car = window.prompt("교통비 입력하세요");
// const food = window.prompt("식비를 입력하세요");
// const drink = window.prompt("음료비를 입력하세요");

const car = parseInt(prompt("교통비를 입력하세요"));
const food = parseInt(prompt("식비를 입력하세요"));
const drink = parseInt(prompt("음료비를 입력하세요"));

let result = car + food + drink;
console.log(result);

let result02 = result > 10000;
const plus = result - 10000;
const munus = 10000 - result;

result02 = result02
  ? `${plus}원 초과 지출을 줄여주세요`
  : `${minus}원 남았습니다, 축하드립니다`;
console.log(result02);
