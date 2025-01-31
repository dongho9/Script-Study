// [1,3,5,7,9,11,13,15,17,19]
const arrs = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const num = 10;

// arrs.forEach(function (arr) {
//   // console.log(arr, index);
//   if (arr > num) {
//     console.log(arr);
//   }
// });
// arrs.forEach((arr) => {
//   // console.log(arr, index);
//   if (arr > num) {
//     console.log(arr);
//   }
// });

for (let i = 0; i <= arrs.length; i++) {
  if (arrs[i] > 10) {
    console.log(arrs[i]);
  }
}
