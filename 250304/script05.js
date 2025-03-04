const url = "https://reqres.in/api/products";

const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const json = JSON.parse(xhr.responseText);
    const items = json.data;
    const result = document.querySelector("#result");
    items.forEach((item) => {
      result.innerHTML += `
      <div>
        <p>상품명 : ${item.name}</p>
        <p> 생산년도 : ${item.year}년</p>
      </div>
      `;
    });
  }
});
