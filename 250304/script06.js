const url = "https://jsonplaceholder.typicode.com/users";

const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const items = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    items.forEach((item) => {
      result.innerHTML += `
      <table border="1">
        <tr>
          <th>이름</th>
          <td>${item.name}</td>
        </tr>
        <tr>
          <th>아이디</th>
          <td>${item.username}</td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>${item.email}</td>
        </tr>
      </table>
      `;
    });
  }
});
