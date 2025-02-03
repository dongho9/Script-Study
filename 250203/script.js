// console.log(document.querySelector("#order-name").value);
// document.querySelector("#items").options[3].innerText;
// smenu.options[fruitItems.selectedIndex].innerText;

const fruitItems = document.querySelector("#items");

const displayFruit = () => {
  let selectedText = fruitItems.options[fruitItems.selectedIndex].innerText;
  // console.log(selectedText);
  alert(`${selectedText}을 선택하셨습니다.`);
};

fruitItems.addEventListener("change", displayFruit);
