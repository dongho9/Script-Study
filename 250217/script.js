// // const str = "hello";

// const str = "Good Morning";
// // console.log(str.length);
// // charAt(3)
// console.log(str.charAt(0));
const str = prompt("문자열을 입력하세요.");
const letter = prompt("어떤 문자를 체크하겠습니까?");
const counting = (srt, letter) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) count += 1;
  }
  return count;
};
const result = counting(str, letter);
document.write(`${str}에는 ${letter}가 ${result}개 있습니다.`);
