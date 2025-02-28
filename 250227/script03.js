const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "JAVASCRIPT", "React"];
const member3 = ["JAVASCRIPT", "TYPESCRIPT"];
const subjects = [...member1, ...member2, ...member3];
console.log(subjects);

const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject);
});
console.log(resultList);

const result = document.querySelector("#result");
result.innerHTML = `
  <ul>
    ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
  </ul>
`;
