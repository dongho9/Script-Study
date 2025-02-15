class Bookc {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
  }
}

class TextBookC extends Bookc {
  constructor(title, price, major) {
    super(title, price);
    // super = class에서 부모 생성자 호출
    this.major = major;
  }
  buyTextBook() {
    console.log(
      `${this.major}전공서적 ${this.title}을(를) ${this.price}원에 구매하였습니다.`
    );
  }
}
//  extends = 상속

const book1 = new Bookc("자바스크립트", 10000);
const book2 = new TextBookC("타입스크립트", 20000, "컴퓨터공학");
book1.buy();
book2.buyTextBook();
book2.buy();
