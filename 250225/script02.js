// 구조분해할당
const fruits = ["사과", "복숭아"];
// const apple = fruits[0];
// const peach = fruits[1];

const [apple, peach] = fruits;

// console.log(apple, peach);

const seasons = ["봄", "여름", "가을", "겨울"];

const [spring, , fall] = seasons;
// console.log(spring, fall);

const char = ["kim", "lee", "park", "choi"];
const [teacher, ...students] = char;
// console.log(teacher, students);

const member = {
  name: "david",
  age: 20,
};
// 객체는 키값과 변수명이 같아야함
// const { name, age } = member;
// const { name: username, age } = member; 이렇게하면 바꿀수는 있음
// console.log(name, age);

const student = {
  name: "david",
  score: {
    history: 85,
    science: 60,
  },
  friends: ["kim", "lee", "park"],
};
const {
  name,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;
console.log(f1);
