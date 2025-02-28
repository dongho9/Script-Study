// 중복되는 값을 허용하지 않을 때 Set
const numSet1 = new Set();

numSet1.add("one").add("two").add("three").add("two");
numSet1.delete("three");
console.log(numSet1);
console.log(numSet1.has("three"));
console.log(numSet1.size);
console.log(numSet1.keys());
console.log(numSet1.values());
console.log(numSet1.entries());
numSet1.clear();
console.log(numSet1);
