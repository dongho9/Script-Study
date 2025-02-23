// 배열 생성
const season = [];
season[0] = "spring";
season[1] = "summer";

const pets = ["dog", "cat", "Mouse"];

const fruits = new Array("사과", "복숭아", "포도");

// 배열의 아이템 접근 후 값 변경
// pets[2] = "햄스터";
// console.log(pets);

const colors = ["red", "green", "blue", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// const animals = ["lion", "bear", "bird"];

// animals.forEach((animal, index, array) => {
//   console.log(`[${array}]: [${index}]: ${animal}`);
// });

// 배열이 가지고 있는 주요 메서드 함수 시리즈
// 1. concat() : 서로 다른 배열 혹은 유사배열을 하나로 합칠 때 사용

const vegetable = ["양상추", "토마토", "피클"];
const meat = ["불고기"];

// const hamburger = vegetable.concat(meat, "빵");
// console.log(hamburger);

const hamburger = [...vegetable, ...meat, "빵"];
// console.log(hamburger);

// 2. reverse : 현재 배열 내 아이템 순서를 역순으로 배치하고 싶을 때 사용
const numbers = [6, 9, 3, 21, 18];
// console.log(numbers.reverse());

// 3. sort() : 배열 안에 있는 아이템들의 값을 정렬하고자 할 때 사용할 수 있는 메서드 함수
// 기본적으로 작은 값부터 큰 값으로 정렬하는 오름차 순의 형태를 띄고 있음
// a-z // 1-9
const week = ["sun", "mon", "tue"];
// console.log(week.sort());

const values = [5, 20, 3, 11, 4, 15];
// console.log(
//   values.sort((a, b) => {
//     return a - b; // 오름차 순
//     // return b - a; 내림차 순
//     // if (a > b) {
//     //   return 1;
//     // }
//     // if (a < b) {
//     //   return -1;
//     // }
//     // if (a === 0) {
//     //   return 0;
//     // }
//   })
// );

// 4. pop(), push() : 배열 안에 맨 뒤쪽부터 값을 제거하거나 혹은 추가하고자 할 때 사용가능한 메서드 함수

const animals = ["lion", "bear", "bird"];

// 뒤쪽 삭제
console.log(animals.pop());
// console.log(animals);

// 뒤쪽에 추가
animals.push("tiger");
// console.log(animals);

// 5. shift(), unshift() : 배열 안에 맨 앞쪽부터 값을 제거하거나 혹은 추가하고자 할 때 사용가능한 메서드 함수

// // 앞쪽에 삭제
// animals.shift();
// console.log(animals);

// // 앞쪽에 추가
// animals.unshift("fish");
// console.log(animals);

// 6. splice() : 배열 내 특정 위치에 있는 아이템 값을 추가하거나 제거하고자 할 때 사용가능한 메서드 함수
// splice(위치, 개수)

const subjects = ["html", "css", "js", "ts", "react"];

console.log(subjects.splice(2));
// index 2부터 끝까지
console.log(subjects);
console.log(subjects.splice(1, 2));
console.log(subjects);
// index 1부터 2개
console.log(subjects.splice(2, 2));
console.log(subjects);

// splice : 원본 값을 바꿔버림
