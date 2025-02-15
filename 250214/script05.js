class Array {
  constructor(length) {
    this.length = length;
  }
  filter() {}
  push() {}
}

const arr = new Array();
console.log(typeof arr);

const bag = {
  type: "backpack",
  color: "black",
  price: 3000,
};

for (let key in bag) {
  console.log(`${key} : ${bag[key]}`);
}
