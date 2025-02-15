// 조건문 : 어떤 조건에 부합하냐, 부합하지 않느냐 실행시킬 실행명령을 별도로 관리하는 것

// 조건문이 실행되기 위해서는 문법

// 조건식 & 실행문
// if문 : 만약 ~라면
// if ~ else문 : 만약 ~ 라면, 하지만 만약 ~ 아니라면
// else if문 : if 혹은 else 외 조건식을 제공하고자 할 때

// switch문 : 여러가지의 선택지를 제공하고, 해당 선택지 가운데에서 어떤 한 가지를 선택했을 때 실행.결과값 도출

// const number01 = Number(prompt("첫 번째 숫자를 입력하세요"));
// const number02 = Number(prompt("두 번째 숫자를 입력하세요"));
const number01 = 10;
const number02 = 5;

// if (number01 > number02) {
//   console.log(`${number01}은 ${number02}보다 큽니다`);
// }
// if (number01 == number02) {
//   console.log(`${number01}은 ${number02}와 같습니다`);
// } else {
//   console.log(`${number01}은 ${number02}보다 작습니다`);
// }

if (number01 > number02) console.log(`${number01}은 ${number02}보다 큽니다`);
else console.log(`${number01}은 ${number02}보다 작습니다`);

// 프로그래밍 언어
// 전통적으로 프로그래밍 언어 2가지 부류로 나눠라
// 실행문 지향 언어 vs 표현식 지향 언어
// 대부분의 프로그래밍 언어 = 실행문 지향언어
// C언어 // 자바 = > 객체지향언어 => JS 실행문 지향언어
// 함수 선언, 호출 => ㄹ로컬컴퓨터 CPU 실행 => 실행된 결과를 개발자에게 X
// 표현식 지향언어 => 루비 // 코틀린
// 자바스크립트 => 실행문 & 표현식 모두 사용할 수 있는 다중 패러다임 언어
