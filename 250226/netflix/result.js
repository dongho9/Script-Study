const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
const query = urlParams.get("search-box");
console.log(query);
const result = document.querySelector("#result");
result.innerHTML = `${query}영화 페이지입니다.`;
