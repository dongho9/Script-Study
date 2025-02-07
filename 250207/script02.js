const students = parseInt(prompt("학생 수를 입력하세요"));
const pencil = 12;

if (isNaN(students)) {
  alert("다시 입력하세요");
} else {
  const das = students % pencil;
  const das02 = students / pencil;
  if (das !== 0) {
    console.log(
      `학생수는 ${students}명이며 필요한 다스 수는 ${Math.floor(
        das02 + 1
      )}개 입니다`
    );
  } else {
    console.log(das02);
    console.log(
      `학생수는 ${students}명이며 필요한 다스 수는 ${das02}개 입니다`
    );
  }
}
