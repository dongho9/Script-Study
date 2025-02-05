// const p = document.querySelectorAll("p")[0];
// console.log(p);

const newp = document.createElement("p");
const textnode = document.createTextNode("Typescript");

newp.appendChild(textnode);
document.body.appendChild(newp);
