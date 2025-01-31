// function code() {
//   console.log("오늘은 목요일");
// }
// code();
// const num = parseInt(prompt("더하고싶은 숫자를 입력하세요"));

// function calcSum(n) {
//   let plus = 0;

//   for (let i = 1; i <= n; i++) {
//     plus += i;
//   }
//   return plus;
// }

// var num = 5;
// console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.`);
// console.log(`1부터 ${n}까지 더한 결과 값은 ${plus}입니다.`);
// calcSum(10);
// (매개변수) => 선언부;
// function sum(a, b) {
//   const result = a + b;
//   console.log(result);
// }
// sum(24, 22);

// "반환" -> return문

// function multiple(a, b = 0, c = 0) {
//   return a + b + c;
// }
// // multiple(2, 4, 8);
// console.log(multiple(2, 4));

// Scope = 범위
// 전역스코프 = global scope - var

// 전역스코프 사용사례 1번
// var hi = "hello";
// function greeting() {
//   console.log(hi);
// }
// greeting();

// 전역스코프 사용사례 2번
// var hi = "hello";
// function greeting() {
//   hi = "bye";
// }
// greeting();

// // 전역스코프 사용사례3번
// function greeting() {
//   hi = "hello";
// }
// greeting();
// console.log(hi);

// var사용하거나 혹은 어떤 키워드도 존재하지 않는 경우 전역에서 사용가능한 변수가 된다 함수내부도 가능

// // 블록스코프
// const factor = 5;

// function calc() {
//   return num * factor;
// }
// {
//   const num = 10;
//   let result = calc();
//   console.log(`result : ${result}`);
// }

// 변수 종류 - 매개변수, 전역변수, 지역변수, 스코프변수, 블록변수, 참조변수
