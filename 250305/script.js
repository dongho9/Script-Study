const url = "https://dummyjson.com/quotes";
const result = document.querySelector("#result");
fetch(url)
  .then((response) => response.json())
  .then((items) => {
    console.log(items);
    const random = Math.floor(Math.random() * 30);
    console.log(random);
    result.querySelector(".quote").innerText = items.quotes[random].quote;
    result.querySelector(".author").innerText = items.quotes[random].author;
  })
  .catch(console.log);
