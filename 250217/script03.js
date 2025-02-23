// const str = " ab cd ef";
// console.log(str.trim());
// // trim = 불필요한 여백 제거
// // trimEnd = 뒤에 여백만 제거
// // trimStart = 앞에 여백만 제거
let str = "Good Morning.";
// console.log(str.toUpperCase());
// console.log(str.substring(5)); //해당 인덱스부터 끝까지 추출

// console.log(str.substring(0, 4)); // 0부터 4앞까지 4는 미포함
// console.log(str.slice(5));
// // console.log(str.slice(0, 4));
// console.log(str.slice(-2));
// console.log(str.slice(-5, 12));
// //subString과 같지만 음수도 가능
// console.log(str.substring(-5, 12));
// //subString에 음수넣으면 0

const arr = str.split(" ");
console.log(arr);
