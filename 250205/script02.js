const orderBtn = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title = document.querySelector("#title");

orderBtn.addEventListener("click", () => {
  const newh = document.createElement("h2");
  const text = document.querySelector(".desc > h2");
  const textnode = document.createTextNode(text.innerText);

  newh.style.fontSize = "2rem";
  newh.style.color = "crimson";
  newh.style.marginTop = "10px";

  const newimg = document.createElement("img");
  const srcnode = document.createAttribute("src");
  srcnode.value =
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b24c79dc-427b-4722-9e0c-2ca66c064ecf/G.T.+HUSTLE+3+EP+OLY.png";

  newimg.setAttributeNode(srcnode);

  newh.appendChild(textnode);
  orderInfo.appendChild(newh);
  orderInfo.appendChild(newimg);
});

console.log(title);

title.addEventListener("click", function () {
  // this.parentNode.removeChild(this);
  // console.log(this.parentNode);
  // this.removeChild();
});
