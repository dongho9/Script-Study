/*
  - 내장객체 : new Date(), Math
  - 브라우저객체 : window
  - 문서객체 : document
  - 사용자정의객체 : 직접 개발자가 원하는 형태, 기능을 담고 있는 개체의 형태로 정의하는 것
  - 객체는 특징 및 원리 혹은 패턴을 가지고 있음
  - 객체는 property(속성)으로 구성되어 있음
  - key:value의 형태를 띄고있음
  - key안에 value값으로 함수가 있을 때는 method
*/

/*
let obj = new Object();
console.log(typeof obj, obj);
obj.name = "David"; //온점 표기법
obj["gender"] = "Man"; //대괄호 표기법
obj.name = "dongho";
obj.age = 1;
delete obj.name; //name 삭제
console.log(obj);
*/

/*
const student = {
  name: "dongho",
  score: {
    history: 85,
    science: 94,
    average: function () {
      return (this.history + this.science) / 2;
    },
  },
};
console.log(student.score.average());
*/

/*
const book = {
  name: "누구나 처음은 있다.",
  page: 350,
  buy: function () {
    console.log("이 책을 구입했습니다.");
  },
};

book.price = 20000;
console.log(book);
book.buy();
*/
