import { API_KEY } from "./env.js";

// Common URL
const tmdbCommand = "https://api.themoviedb.org/3";

// NowPlaying DB
const nowPlaying = async () => {
  const url = `${tmdbCommand}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// UpComing DB
const upComing = async () => {
  const url = `${tmdbCommand}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// TopRated DB
const topRated = async () => {
  const url = `${tmdbCommand}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// Promise DBs
const getMovies = async () => {
  const [nowPlayingMovie, upComingMovie, topRatedMovie] = await Promise.all([
    nowPlaying(),
    upComing(),
    topRated(),
  ]);

  // Main Slider
  const mainSlider = document.querySelector(".mainSlider");

  nowPlayingMovie.forEach((movie) => {
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}">`;
    mainSlider.appendChild(figure);
  });

  // Fade Effect
  const figures = mainSlider.querySelectorAll("figure");
  let currentIndex = 0;

  const showNextSlide = () => {
    figures[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % figures.length;
    figures[currentIndex].classList.add("active");
  };

  figures[currentIndex].classList.add("active");

  setInterval(showNextSlide, 3000);
};

getMovies();

// gnb Li event
const naviList = document.querySelectorAll(".gnb > ul > li");
const submenus = document.querySelectorAll(".submenu");
const menuBg = document.querySelector(".menu-bg");
naviList.forEach((li) => {
  li.addEventListener("mouseover", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "1";
      submenu.style.maxHeight = "320px";
      menuBg.style.opacity = "1";
      menuBg.style.maxHeight = "320px";
    });
  });
  li.addEventListener("mouseout", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "0";
      submenu.style.maxHeight = "0px";
      menuBg.style.opacity = "0";
      menuBg.style.maxHeight = "0px";
    });
  });
});

// Accordion Event
const contents = document.querySelectorAll(".accordion .content");
contents[0].style.display = "block";
const titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    contents.forEach((item) => {
      item.style.display = "none";
    });
    titles.forEach((othertitle) => {
      if (othertitle !== title) {
        othertitle.classList.remove("active");
      }
    });
    const content = title.nextElementSibling;
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});

// search Modal
const searchBtn = document.querySelector(".fa-search");
const modalSearch = document.querySelector(".modalSearch");
const closeBtn = document.querySelector(".fa-close");
searchBtn.addEventListener("click", () => {
  modalSearch.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});
