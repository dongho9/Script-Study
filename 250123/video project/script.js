const articles = document.querySelectorAll("article");

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    console.log("hover");
  });
});
