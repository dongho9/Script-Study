const string = prompt("영문 소문자로 된 문자열을 입력해주세요");
// console.log(string);
// const firstchar = string[0].toUpperCase();
// const remain = string.slice(1);
// const result = firstchar + remain;

// split() => 문자열을 배열로 바꿔주는 역할
// join() => 배열을 문자열로 바꿔주는 역할
// 서로다른 두개의 배열 혹은 유사배열을 1개의 배열로 합칠 때
// concat() => 서로다른 두개의 배열 혹은 유사배열을 1개의 뱅열로 합칠 때 => [...]
const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
document.write(result);
