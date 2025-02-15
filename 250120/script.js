/*
연산자
- 사칙연산 = + - / *
- % => 나머지의 값을 구하는 연산자(홀수 && 짝수)
- 1. 산술연산 : +  - / * %
- 2. 증감연산 : ++, -- 증감연산자는 피연산자와의 위치에 따라서 먼저 연산을 시작할 수도 있고 나중에 연산을 시작할 수도 있다.
- 3. 비교연산 : == ===, != !==, <, >, <=, >=
- 4. 복합대입연산자 : +=, -= *= /= %=
- 5. 논리연산자 : ! && ||
- 6. 연견연산자 : 문자열 + 문자열
- 7. 삼항조건연산자 : 1항 : 조건식 2항: 참 3항: 부정
*/
// const x = 10;
// const y = 4;
// let result = x / y;
// console.log(result);
// result = x % y;
// console.log(result);
// let a = 10;
// a = ++a;
// console.log(a);
// a = a++;
// console.log(a);
// a = --a;
// console.log(a);

// let x = 10,
//   y = 4;
// let result;

// result = x + y--; --뒤쪽에서 있어서 그대로 14출력됨
// console.log(result);

// const actor = "현빈",
//   movie = "하얼빈";

// const result = `${actor}님은 ${movie}에 출연하셨습니다`;
// console.log(result);

// let x = 3,
//   y = 3;
// y = x + 3;
// y += x;  y에 x값을 더한 값을 할당해
// y *= x; y에 x값을 곱한 값을 할당해
// y %= x; y에 x값을 나눈 나머지를 할당해

let str = "<table border= '1'>";
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>";

document.write(str);

// console.log(3 == "3");
// // 얕은 비교 타입은 비교하지 않고 값만 비교
// console.log(3 === "3");
// // 깊은 비교 타입까지 비교
// console.log(3 != "3");
// console.log(3 !== "3");

// let a = 10,
//   b = 20;

// a > 10 || b > 20; // ||는 둘중 하나만트루면 트루
// console.log(a > 10 || b > 20);
// console.log(a >= 10 && b >= 20); // && 둘다 트루면 트루

let a = 10,
  b = 3;
let result = a > b ? "Javascript" : "TypeScript"; //3항 조건연산자
//a > b보다 작은게 트루면 자바스크립트 폴스면 타입스크립트
console.log(result);
