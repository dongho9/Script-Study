// const hello = (name, message) => {
//   console.log(`${name}님 ${message}`);
// };
// hello("슛돌이", "반갑습니다.");

// const hello01 = (name, message = "안녕하세요") => {
//   console.log(`${name}님 ${message}`);
// };
// hello01("슛돌이");

// const addNum = (a, b = 2) => {
//   const result = a + b;
//   console.log(result);
// };
// const addNum = (...numbers) => {
//   let sum = 0;
//   numbers.forEach((number) => {
//     sum += number;
//   });
//   return console.log(sum);
// };
// addNum(1);
// addNum(1, 3);
// addNum(1, 2, 3, 4, 5);

// const animal = ["bird", "cat"];
// const fruits = ["apple", "banana"];
// console.log(animal.concat(fruits));
// console.log([...animal, ...fruits]);

// const mine = fruits;
// console.log(mine, fruits);
// mine[1] = "orange";
// console.log(mine, fruits);

// const mine = [...fruits];
// console.log(mine, fruits);
// mine[1] = "orange";
// console.log(mine, fruits);

// const book = {
//   title: "javascript",
//   pages: 500,
// };
// console.log(book);
// book.published = "2025-03";
// console.log(book);
// console.log(book.published);

// book["author"] = "david";
// console.log(book);

// const fn = () => {
//   return "result";
// };

// const add02 = (a, b) => {
//   return a + b;
// };
// const obj = {
//   [fn()]: "함수 키",
//   [`${add02(10, 20)} key`]: "계산식 키",
// };
// console.log(obj);

// const user = {
//   name: "david",
// };
// user.age = 20;
// console.log(user);

// const makeUser = (name, age) => {
//   return {
//     name, //name: name, 둘이 같으면 생략가능
//     age, //age: age, 둘이 같으면 생략가능
//   };
// };

// const user1 = makeUser("소피아", 30);
// console.log(user1);

// Symbol
// 유일무이한 값 생성 및 관리
// const mySymbol = Symbol();
// const mySymbol2 = Symbol("hi");
// console.log(mySymbol === mySymbol2);
// console.log(mySymbol);
// console.log(mySymbol2);

// Symbol간 값을 공유하거나 논리적으로 비교할 때는 전역에 저장 하는 것이 좋음
// 전역에 저장 Symbol.for()
// const s1 = Symbol.for("foo");
// const s2 = Symbol.for("foo");
// //foo => Token String
// console.log(s1 === s2);

// const token = Symbol.for("tokenString");
// // 값을 찾아오는법
// console.log(Symbol.keyFor(token) === "tokenString");

// // 심볼을 생성하는 일반적인 방법
// const obj01 = {};
// const v = "my";
// obj01[v] = "myprops";
// obj01[123] = 123;
// obj01["props" + 123] = false;
// console.log(obj01);

// const obj02 = {};

// const mySymbol3 = Symbol("mySymbol");
// const mySymbol4 = Symbol("mySymbol");

// obj02[mySymbol3] = 123;
// obj02[mySymbol4] = 456;
// console.log(obj02);

const count = Symbol();
class Counter {
  constructor() {
    this[count] = 0;
  }
  add() {
    return this[count]++;
  }
  get() {
    return this[count];
  }
}
const test1 = new Counter();
// test1.add();
// console.log(test1.get());
// test1.add();
// console.log(test1.get());

class BetterCounter extends Counter {
  count() {
    return console.log("test");
  }
}
const test2 = new BetterCounter();
console.log(test2.count());
