const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = document.querySelector("input[type='text']");
  const word = inputText.value;
  alert(`입력하신 ${word}의 글자수는 ${word.length}입니다`);
});
