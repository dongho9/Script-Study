/*
이터러블 객체
조건
1) for of forEach 등의  반복문을 사용할수 있어야함
2) 전개연산자구문을 활용할 수 있어야함
3) 구조분해할당이 가능해야함

자바스크립트에서 이터러블 객체 => 문자열(유사배열), 배열
Array.from()은 유사 배열 객체(array-like object) 또는 이터러블(iterable)을 배열로 변환하는 메서드.
*/
// const hi = "hello";
// Array.from(hi).forEach((ch) => {
//   // console.log(ch);
// });

// const charTest = [...hi];
// // console.log(charTest);

// const [ch1, ...ch2] = hi;
// console.log(ch1, ch2);

const arr = [1, 2, 3, 4, 5];
const it = arr[Symbol.iterator]();
// console.log(it);

// 일반함수
function fnc() {
  // console.log("1");
  // console.log("2");
  // console.log("3");
}

fnc();

// 제너레이터 함수
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g1 = gen();
// console.log(g1.next());

// g1.forEach((g) => {
//   console.log(g);
// });

for (let item of g1) {
  console.log(item);
}
