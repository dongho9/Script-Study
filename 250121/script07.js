/*
스코프 = 범위
함수가 어디에서 어디 까지를 커버해야하는지 결정

스코프 체인 = 스코프 범위 내의 요소를 하나씩 차례대로 검색해나가는 프로세스
- 현재 호출된 함수의 과거 선언 당시의 LexicalEnvironment 정보까지 참조

그래서 this가 먼데 
1.  js내 전역 공간에서 this는 무조건 전역 객체
node js => global
*/

// const func = function (x) {
//   console.log(this, x);
// };
// func(1);

// const obj = {
//   method: func,
// };

// obj.method(2);

// 함수를 독립적으로 실행시킬 때에는 this는 전역객체인 window를 가리킴
// 함수가 특정 객체의 속성 메서드로 실행시킬 때에는 해당 객체를 가리킴

// 1. this를 호출하는 상황이 전역요소인지 = > window
// 2. 함수를 독립적으로 호출한 상황에서 this를 요청 => window
// 3. 특정 객체 안에 메서드 속성 중 메서드를 활용해서 this를 요청 => 해당 객체

// const obj = {
//   method: function (x) {
//     console.log(this, x);
//   },
// };

// obj.method(1);
// obj["method"](2);

// const obj = {
//   methodA: function () {
//     console.log(this);
//   },
//   inner: {
//     methodB: function () {
//       console.log(this);
//     },
//   },
// };

// obj.methodA();
// obj["methodA"]();

// obj.inner.methodB();
// obj.inner["methodB"]();
// obj["inner"]["methodB"]();
// obj["inner"].methodB();

// 메서드 = method = 객체 안에 있는 함수

// const obj1 = {
//   outer: function () {
//     console.log(this);
//     const innerFunc = function () {
//       console.log(this);
//     };
//     innerFunc();

//     const obj2 = {
//       innerMethod: innerFunc,
//     };
//     obj2.innerMethod();
//   },
// };
// obj1.outer();

// const obj = {
//   outer: function () {
//     console.log(this);
//     const innerFunc = () => {
//       console.log(this);
//     };
//     innerFunc();
//   },
// };
// obj.outer();

// const arr = [1, 2, 3, 4];
// arr.forEach(function (num) {
//   console.log(this, num);
// // });

// setTimeout(function () {
//   console.log(this);
// }, 300);

// document.body.innerHTML += `<button id='a'>클릭</button>`;
// document.body.querySelector("#a").addEventListener("click", function () {
//   console.log(this);
// });

const obj1 = {
  outer: function () {
    console.log(this);
    const innerFunc1 = function () {
      console.log(this);
    };
    innerFunc1();

    const self = this; //this 우회하기
    const innerFunc2 = function () {
      console.log(self);
    };
    innerFunc2();
  },
};
obj1.outer();
