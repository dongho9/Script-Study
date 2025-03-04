const xhr = new XMLHttpRequest();
xhr.open("GET", "student.json", true);
xhr.send();

const renderHTML = (contents) => {
  const result = document.querySelector("#result");
  let output = "";
  contents.forEach((content) => {
    console.log(content);
    output += `
    <h2>${content.name}</h2>
    <ul>
    <li>${content.major}</li>
    <li>${content.grade}학년</li>
    </ul>
    <hr>
    `;
  });
  result.innerHTML = output;
};
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    console.log(students);
    renderHTML(students);
  }
});
