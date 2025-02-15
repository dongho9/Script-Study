// 변수 안에 담을 수 있는 값 => 자료형
// 1)원시타입 = Primitive type
// number = 숫자
// string = 문자
// boolean = 논리
// Template Literal = 변수와 문자열을 동시에 사용하고자 할 때 굳이 번거롭게 연산자를 사용하지 않을 수 있도록 만들어 놓은 문법입니다.
// undefined = 미정
// null = 유효하지 않은 값
// 아예 값을 주지 않은 것을 정의하고자 할 때
// symbol = 유일무이한 값

// 2)참조타입 = Reference type
// array = 배열
// function = 함수
// object = 객체

// regexp = 정규표현식
// Map = 맵데이터
// Set = 셋데이터

const num = 7;
const str = "7";
const bool = true;
const bool2 = false;
// const age = prompt("당신의 나이를 입력하세요");

// console.log(age);
// console.log(typeof age);
console.log(typeof bool);
console.log(typeof bool2);

const userName = "현빈";
const movieTitle = "하얼빈";
const result = userName + "배우가 출연한 최근 영화는 " + movieTitle + "입니다.";
const result02 = `${userName}배우가 출연한 최근 영화는 ${movieTitle}입니다.`;

console.log(result02);

let hobby;
console.log(hobby);

let weeknd = null;

console.log(weeknd);

const only01 = Symbol();
const only02 = Symbol();
console.log(only01 === only02);

let id = Symbol();

const member365 = {
  name: "Jack",
  [id]: "ezen",
};
console.log(member365);

const arr = [1, 2, 3];
const strarr = ["park", "kim", "lee"];
const boolarr = [true, false];

arr[3] = 7;
console.log(typeof arr);
console.log(arr);
console.log(`${arr[2]}은 arr배열의 ${arr.length}번째 값입니다.`);

console.log(arr);
// 배열의 뿌리 = 객체
const obj = {
  firstNumber: 1,
  secondNumber: 2,
  finalNumber: 3,
};
const frontendClass = {
  tutor: "David",
  studentNumber: 16,
  major: "Language",
};
// 객체의 형태는 key: value 한쌍의 property = 속성
// html을 사용할 때 => a href => attribute

// 온점표기법
console.log(frontendClass.tutor);

// 대괄호 표기법
console.log(frontendClass["studentNumber"]);

// 객체에 값 추가
frontendClass.attitude = "thebest";
console.log(frontendClass);

// function = 기능

// 원래 초창기에 JS 함수 구현
function hello() {
  console.log("hello world");
}
console.log(typeof hello);
