const productInfo = "./db.json";
const ul = document.querySelector("ul");

// db.json
fetch(productInfo).then((response) => {
  // json data 찾아오기
  response
    .json()
    .then((data) => {
      let idCounter = Date.now();
      const products = {
        data: data.data.map((item) => ({
          ...item,
          id: idCounter++,
        })),
      };

      // 기존 json data 제거함수
      const removeItems = () => {
        const items = document.querySelectorAll("li");
        items.forEach((item) => {
          item.remove();
        });
      };
      // 찾아온 json data를 활용해서 원하는 DOM생성
      const createItem = (product) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const attr = document.createAttribute("src");
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const span = document.createElement("span");

        li.id = product.id;
        attr.value = product.img;
        img.setAttributeNode(attr);

        h3.className = "name";
        h3.innerText = product.name;

        const price = new Intl.NumberFormat("ko-kr", {
          style: "currency",
          currency: "KRW",
        }).format(product.price);

        span.className = "price";
        span.innerText = price;
        li.append(img, div);
        ul.appendChild(li);
        div.append(h3, span);

        li.addEventListener("click", () => {
          location.href = "product-detail.html";
        });
      };
      // json data 찾아온 후 DOM생성 및 브라우저 출력
      const importDate = () => {
        products.data.map((product) => {
          createItem(product);
        });
      };
      importDate();

      // 오름차순 정렬
      const asceButton = document.querySelector(".ascending");
      const deceButton = document.querySelector(".decending");
      const sortAsce = (e) => {
        e.preventDefault();
        const myProducts = products.data.sort((a, b) => {
          return a.price - b.price;
        });
        removeItems();

        myProducts.forEach((product) => {
          createItem(product);
        });
      };

      // 내림차순 정렬
      const sortDece = (e) => {
        e.preventDefault();
        const myProducts = products.data.sort((a, b) => {
          return b.price - a.price;
        });
        removeItems();
        myProducts.forEach((product) => {
          createItem(product);
        });
      };
      asceButton.addEventListener("click", sortAsce);
      deceButton.addEventListener("click", sortDece);

      // 최신순 정렬
      const sortNew = (e) => {
        e.preventDefault();
        const myProducts = products.data.sort((a, b) => {
          return b.id - a.id;
        });
        removeItems();
        myProducts.forEach((product) => {
          createItem(product);
        });
      };
      const newListing = document.querySelector(".newlisting");
      newListing.addEventListener("click", sortNew);

      // 검색 이벤트
      const searchbar = document.querySelector(".searchBar");

      searchbar.addEventListener("input", () => {
        const keyword = searchbar.value.toLowerCase(); //대문자로 입력해도 소문자로 받기
        if (keyword === "") {
          removeItems();
          importDate();
        } else {
          const filtered = products.data.filter((product) => {
            return product.name.toLowerCase().includes(keyword);
          });
          removeItems();
          filtered.forEach((product) => {
            createItem(product);
          });
        }
      });

      // 셀렉트 & 옵션이벤트
      const selectCategory = (e) => {
        const selectedIndex = e.target.options.selectedIndex;
        const value = e.target.options[selectedIndex].value;
        console.log(selectedIndex, value);
        const filtered = products.data.filter((product) => {
          return product.category === value;
        });
        removeItems();
        filtered.forEach((product) => {
          createItem(product);
        });
      };
      const select = document.querySelector("select");
      select.addEventListener("change", selectCategory);
    })
    .catch((error) => {
      console.error(error);
    });
});

// channel talk
(function () {
  var w = window;
  if (w.ChannelIO) {
    return w.console.error("ChannelIO script included twice.");
  }
  var ch = function () {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function (args) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;
  function l() {
    if (w.ChannelIOInitialized) {
      return;
    }
    w.ChannelIOInitialized = true;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
    var x = document.getElementsByTagName("script")[0];
    if (x.parentNode) {
      x.parentNode.insertBefore(s, x);
    }
  }
  if (document.readyState === "complete") {
    l();
  } else {
    w.addEventListener("DOMContentLoaded", l);
    w.addEventListener("load", l);
  }
})();

ChannelIO("boot", {
  pluginKey: "29824894-fcab-4441-8848-856670488e73",
});
