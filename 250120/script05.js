// 자바스크립트의 코드가 작성 혹은 생성 => 컴퓨터 메모리 공간 객체가 생성 => 실행 컨텍스트 = execution context

// execution context : 개발자가 현재 작성 혹은 생성 변수(식별자)가 어떤 것이 있는지, 실행시켜야 하는 함수는 무엇인지 등등의 정보를 저장해놓고 있음

// execution context => 어떤 코드를 먼저 실행해야 하는가에 대한 우선 순위를 결정하기 위한 목적

// 컴퓨터 > 자바스크립트 어떤 곳에서 어떤 방식으로 실행되는지 이해

// 컴퓨터 공간 > stack => 쌓다

// 스택구조(먼저 들어간 애가 나중에 실행) <-> 큐(Queue(먼저 들어간 애 먼저 실행))

// call stack : 자바스크립트가 명령문을 처리하는 공간

// variableenvironment : 환경변수 // 현재 실행 콘텍스트 내 변수명, 함수 정보, 실행 컨텍스트 내 특정함수가 실행 혹은 호출되는 순간 해당 함수를 스냅샷의 형태로 저장
// 스냅샷 : 일시정지 사진

// lexicalenvironment : 전처리환경 // 환경변수와 동일한 값으로 시작하지만 특정 함수 호출하면 해당 함수가 실시간 처리를 하고있는 상태를 바로 반영해줌
// lexicla : 사전적인

// EnvironmentRecord : 현재 실행하고자하는 코드들 내부에 저장되어있는 정보값을 가지고있음.

//outer-EnvironmentReference : 현재 실행하고자하는 코드들이 외부에 영향을 받고있는지, 받고 있다면 누구의 영향을 받는지를 확인할 수 있는 정보값을 가지고 있음.

// thisbinding : 현재 변수 || 식별자가 가리켜야하는 대상 객체가 누구인지에 대한 정보 값을 가지고 있음

// const a = 1;

// function outer() {
//   function inner() {
//     console.log(a);
//     a = 3;
//   }
//   inner();
//   console.log(a);
// }
// outer();
// console.log(a);

// function a() {
//   let x;
//   x;
//   x = 1;
//   console.log(x);
//   console.log(x);
//   x = 2;
//   console.log(x);
// }
// a();

// //호이스팅
// function a() {
//   // let b;
//   // b = function() {}
//   console.log(b);
//   b = 90;

//   console.log(b);
//   function b() {}
//   console.log(b);
// }
// a();
