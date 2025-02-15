const book1 = {
  title: "javascript",
  page: 648,
  buy: function () {
    console.log("i did buy this book");
  },
};

// 객체 자료구조를 배열로 변환시킬 수 있을까
const keys = Object.keys(book1);
const values = Object.values(book1);
const entries = Object.entries(book1);
console.log(entries[0]);
