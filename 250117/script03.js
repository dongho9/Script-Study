//변수

//자료형

//자동 형 변환
const one = "20";
const two = 25;

const result = one + two;
const result02 = one - two;
console.log(typeof result);

// 수동 형 변환
// const str = Number("20");
// const str = parseInt("20");
const str = parseFloat("20");
console.log(typeof str);
const num99 = "17.8";

console.log(parseInt(num99)); //소수점 빼고 정수로 나옴
console.log(parseFloat(num99)); //소숫점 포함
console.log(Number(num99));

console.log(Number(true));
console.log(parseInt(true));

// NaN = not a number

const num77 = 77;

console.log(typeof num77.toString());
// null & undefined
console.log(typeof String(num77));

//논리형으로 boolean으로 형 변환
//true || false
console.log(Boolean("HELLO"));
console.log(Boolean(undefined));
