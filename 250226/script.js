// map
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
});

// const newNumbers = numbers.map((number) => {
//   return number * 2;
// });
const newNumbers = numbers.map((number, index, array) => number * 2 + index);

console.log(newNumbers);

// filter
// 조건에 부합하는 값을 찾아 새로운 배열로 반환
const scores = [90, 35, 64, 88, 45, 92];

const highscore = scores.filter((score) => {
  return score > 80;
});
console.log(highscore);

// find
// 내가 찾고자하는 값이 나타나는 순간 해당 메서드 함수 종료 => 단일 값인 경우

const names = ["kim", "park", "lee"];
const result = names.find((name) => {
  return name === "park";
});
console.log(result);

// find는 문자열로 반환, filter는 배열로 반환
// 찾아올 값이 없으면 find는 undefined filter는 빈 배열

//reduce

const numbers01 = [1, 2, 3, 4, 5];
const result01 = numbers01.reduce((total, current) => total + current, 0);
console.log(result01);
