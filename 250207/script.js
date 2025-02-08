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
      const twoPlus = a + b + c - maxnum;
      if(twoPlus < maxnum){
        console.log(`두 변의 길이를 더한 값이 입력 값 중 최대 값인 ${maxnum}보다 작기때문에 삼각형을 만들 수 없습니다.`);
      }else{
        console.log(`두 변의 길이를 더한 값이 입력 값 중 최대 값인 ${maxnum}보다 크기때문에 삼각형을 만들 수 있습니다.`);
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
