const newBook = {
  title: "자바스크립트",
  page: 360,
  price: 32000,
  writer: "강동호",
  published: "2025-04-22",
  question: function () {
    console.log(`${this.writer}의 따끈한 신간 도서입니다.`);
  },
};
// newBook.question();

// 생성자 함수
function Book(title, page, price, writer, published) {
  this.title = title;
  this.page = page;
  this.price = price;
  this.writer = writer;
  this.published = published;
  this.question = function () {
    console.log(`${this.writer}님의 따끈한 신간 도서입니다.`);
  };
}

// 생성자 함수를 만들고 나서 해당 생성자함수를 사용하고자 할 때 반드시 new 예약어 사용

const book1 = new Book("자바스크립트", 360, 32000, "강동호", "2024-12-19");

console.log(book1);
book1.question();
