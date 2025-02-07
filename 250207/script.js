const a = parseInt(prompt("변의 길이를 입력하세요"));

if (isNaN(a)) {
  alert("숫자가아닙니다");
  location.reload();
} else {
  const b = parseInt(prompt("두번째 변의 길이를 입력하세요"));
  if (!isNaN(b)) {
    const c = parseInt(prompt("세번째 변의 길이를 입력하세요"));
    if (!isNaN(c)) {
      const maxnum = Math.max(a, b, c);
      if (
        maxnum === c < a + b ||
        maxnum === b < a + c ||
        maxnum === a < b + c ||
        (a === b && a === c && b === c)
      ) {
        console.log("no");
      } else {
        console.log("yes");
      }
    } else {
      alert("숫자가아닙니다");
      location.reload();
    }
  } else {
    alert("숫자가아닙니다");
    location.reload();
  }
}
