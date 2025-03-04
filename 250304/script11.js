fetch("student.json")
  .then((response) => response.json())
  .then((results) => {
    const result = document.querySelector("#result");
    results.forEach((item) => {
      result.innerHTML += `
      <h2>${item.major}</h2>
      <ul>
      <li>${item.grade}학년</li>
      <li>이름 : ${item.name}</li>
      </ul>
      <hr>
      `;
    });
  })
  .catch((err) => console.log(err));
