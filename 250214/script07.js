//인스턴스 객체 & 프로토타입 관계

/*
  1. class 혹은 생성자 함수를 사용해서 객체의 포맷(*형태)를 구현할 수 있음
  2. class 혹은 생성자 함수를 사용해서 만들어진 포맷을 사용하려면 new 예약어와 함께 
  Prototype 객체를 호출하면 가능
  3. 이렇게 호출해온 Protoype 객체의 속성 및 메서드를 상속받은 요소를 인스턴스 라고함
  4. 만약 인스턴스 객체의 원조라고 할 수 있는 Prototype이 무엇인지, 혹은 해당 Prototype이
  가지고 있는 속성 및 메서드 함수를 확인하고자 할 때 사용하는 속성은 __proto__
  5. 인스턴스 객체에 영향을 준 프로토타입의 조상이 누군지를 확인해볼 수 있는 속성 prototype
  
  const Book = function (title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
    this.finish = function () {
      let str = "";
      this.done === false ? (str = "읽는 중") : (str = "완독");
      return str;
    };
  };
  */

const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;
};

Book.prototype.finish = function () {
  this.done === false ? (str = "읽는 중") : (str = "완독");
  return str;
};
const book = new Book("타입스크립트", 648, false);
// 생성자 함수나 클래스로부터 생성된 개별적인 객체를 의미합니다.
// console.log(book instanceof Book);
