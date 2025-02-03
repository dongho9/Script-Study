const btn = document.querySelector("#sale_btn");

const showPrice = () => {
  const originPrice = Number(document.querySelector("#price").value);
  const sale = Number(document.querySelector("#sale").value);
  const calprice = originPrice - originPrice * (sale / 100);
  const result = (document.querySelector(
    "#result"
  ).innerText = `할인된 가격은 ${calprice}원입니다!`);
};
btn.addEventListener("click", showPrice);
