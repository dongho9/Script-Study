const str = "hello, everyone";

// 문자열을 배열로 변환하는 방법1
// console.log(str.split(""));

// 문자열을 배열로 변환하는 방법2 : 전개 연산자 구문
// console.log([...str]);

// 문자열을 배열로 변환하는 방법3 : Array
console.log(Array.from(str));
