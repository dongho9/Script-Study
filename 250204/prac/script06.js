const a = parseInt(prompt("숫자를 입력하세요"));

if (a !== "" && a > 0) {
  const b = parseInt(prompt("숫자를 입력하세요"));
  if (b !== "" && b > 0) {
    const c = parseInt(prompt("숫자를 입력하세요"));
    if (c !== "" && b > 0) {
      if (a > b && b < c) {
        console.log(`입력하신 ${a}, ${b}, ${c} 중 최솟값은 ${b}입니다`);
      } else if (a < b && a < c) {
        console.log(`입력하신 ${a}, ${b}, ${c} 중 최솟값은 ${a}입니다`);
      } else if (c < a && c < b) {
        console.log(`입력하신 ${a}, ${b}, ${c} 중 최솟값은 ${c}입니다`);
      }
    }
  } else {
    location.reload();
  }
} else {
  location.reload();
}
