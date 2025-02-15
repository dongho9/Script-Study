function Book(title, price) {
  this.title = title;
  this.price = price;
}
Book.prototype.buy = function () {
  console.log(`${this.title}을 ${this.price}원에 구매하시겠습니까?`);
};
const book1 = new Book("javascript", 10000);
// book1.buy();

function TextBook(title, price, major) {
  Book.call(this, title, price);
  //this의 충돌을 막기위해 this도 call해옴
  this.major = major;
}
TextBook.prototype.buyTextBook = function () {
  console.log(
    `${this.major}전공서적 ${this.title}을 ${this.price}원에 구매했습니다.`
  );
};
Object.setPrototypeOf(TextBook.prototype, Book.prototype);
// `TextBook`의 프로토타입을 `Book`과 연결

const book2 = new TextBook("typescript", 20000, "컴퓨터공학");
book2.buyTextBook();
book2.buy();
