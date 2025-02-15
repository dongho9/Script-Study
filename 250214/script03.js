class book {
  constructor(title, page, price, writer, published) {
    this.title = title;
    this.page = page;
    this.price = price;
    this.writer = writer;
    this.published = published;
  }
  question() {
    console.log(`${this.writer}님의 따끈한 신간 도서입니다.`);
  }
}
const book1 = new book("자바스크립트", 360, 32000, "강동호", "2024-12-19");
book1.question();
