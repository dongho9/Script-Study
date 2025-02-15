let a = 10;
let b = a;
b = 15;
console.log(a, b);

let obj1 = {
  c: 10,
  d: "ddd",
};

let obj2 = obj1;
// 얕은 복사

obj2.c = 20;

console.log(obj2, obj1);

const arr = [1, 2, 3];

let user = {
  name: "david",
  gender: "male",
};
// let user02 = user;
// user02.name = "dongho";
// console.log(user02, user);

function copyObject(target) {
  let result = {};
  for (let props in target) {
    result[props] = target[props];
  }
  return result;
}
const user2 = copyObject(user);
user2.name = "dongho";

console.log(user.name, user2.name);

// spread operator = 전개연산자 구문
const fruit = ["apple", "banana", "cherry"];
const favorite = [...fruit];
// 깊은 복사

console.log(fruit, favorite);
favorite[1] = "grape";
console.log(fruit, favorite);
