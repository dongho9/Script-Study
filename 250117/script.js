// 변수 = variable
// 변수 = 변할 수 있는 값 = 수
// 변수 = 바구니(값을 담을 수 있는 그릇)

// 선언 & 할당 => 단계

// 선언하는 방식 => var(*예약어)
// 선언하는 방식 => let, const

// 모든 변수는 고융한 이름을 가지고 있음 => 변수명 || 식별자
const num = 1;

// 콘솔
console.log(num);

//  const = constant = 상수
// 재선언 && 재할당 X

/*
변수를 선언하는 순간 => 컴퓨터 데이터 (*변수 값) => 메모리 영역 할애
=> 메모리가 담길 수 있는방 생성 => 식별자*/

// const num = 2;  <= 재선언
// num = 2; <= 재할당

// 프로그래밍 언어는 엄격할 수록 안정성이 뛰어나다 => 위험요소가 감소

// let = 재할당만 가능
let str = "hello world";
// let str = "metoo";
str = "me too";
console.log(str);

// var = 재선언, 재할당 가능
var bool = true;
var bool = false;
bool = "moya";

console.log(bool);

// 호이스팅(Hoisting) = 끌어려진다
// var num01 = 1;
// var result = num01 + num02;
// var num02 = 100;
// console.log(result);
