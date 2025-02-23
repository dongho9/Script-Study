// regExp regular Expression = 정규표현식
// 문자열 + 정규표현식 + 배열
// 1. 패턴 : 찾고자하는 문자의 형식을 하나의 정형화된 형태로 정의
// 2. 플래그 : 위에서 정의한 패턴의 값을 찾고자 할 때 추가적인 옵션을 적용할 수 있음
// 3. 클래스 : 패턴 내 부가적인 정보를 적용하고 싶을 때 사용할 수 있는 요소

// test()는 주로 JavaScript의 RegExp 객체에서 사용되는 메서드로, 주어진 문자열이 해당 정규표현식 패턴과 일치하는지 여부를 불리언 값(true/false)으로 반환

// decimal
// const regexp = /\d{3}/;
// console.log(typeof regexp);

// / : 정규표현식의 시작과 끝
// \d : 숫자 (0-9)
// \D : 숫자가 아닌 모든 문자
// \s : 공백 문자 (스페이스, 탭, 개행)
// \S : 공백이 아닌 문자
// \w : 단어에 들ㅇ어가는 개별 문자
// \W : 단어에 들어가지 않는 모든 문자
// {3} : 정확히 3개

// const regexp = new RegExp(/\d{3}/);

// console.log(regexp.test("hello"));
// console.log(regexp.test("123"));

// // match()는 문자열 메서드로, 정규표현식과 일치하는 부분 문자열(들)을 배열로 반환합니다.
// let str = "ES2025 is powerful";
// const pattern = /ES2025/;
// console.log(str.match(pattern));
// console.log(str.replace(pattern, "LOVE"));

/* 플래그
i : 대소문자 구분 없이 문자열을 찾고싶을 때
g : 문자열 가운데 사전에 정의한 패턴과 일치하는 모든 요소를 찾아오고 싶을 때 (g를 사용하지않으면 가장 먼저 찾아낸 요소만 반환)
m: 문자열의 행이 바뀌어도 동일한 문자라고 인식함
*/

// const str = "Love is Power777";
// // const pattern = /LOVE/i;
// // console.log(pattern.test(str));
// const pattern = /Power\d{3}/;

// console.log(str.match(pattern));

/*
정규표현식의 특수문자
^(캐럿) : 특정 문자로 시작하는 문자
&(달러) : 특정 문자로 끝나는 문자
*/

// const hello = "ehllo everyone.";
// // const pattern = /^e/;

// // console.log(pattern.test(hello));
// console.log(/one.$/.test(hello));
// console.log(/.$/.test(hello));
// console.log(/one$/.test(hello));

// 정규표현식의 범위설정
// // [범위 입력]
// const str = "ES2025";

// console.log(str.match(/[^0-9]/g));

const str = "Ooooops";

// console.log(str.match(/o{2,4}/i));

// {숫자}정규표현식의 반복
// ${숫자,} 숫자 이상

const number = /^[0-9]+$/;

const positive = /^[1-9]\d*$}/;
const negative = /^\-[1-9]\d*$}/;

const engword = /^[a-zA-Z]+$/;

const endanddword = /^[a-zA-Z0-9]+$/;
const korean = /[가.힣]+$/;

const koreanandenglish = /[가.힣a-zA-Z]+$/;
