import { weathermap, unsplash } from "./env.js";
const showPosition = (position) => {
  console.log(position);
  const { latitude, longitude } = position.coords;
  getCurrentWeather(latitude, longitude);
};
const getCurrentWeather = (lati, long) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${weathermap}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const city = document.querySelector(".city");
      const weather = document.querySelector(".weather");
      const temp = document.querySelector(".temp");
      const icon = document.querySelector(".icon");

      let cityName;
      switch (result.name) {
        case "Jamwon-dong":
          cityName = "역삼동";
          break;
      }

      city.innerText = cityName;

      let weatherInfo;

      switch (result.weather[0].main) {
        case "Haze":
          weatherInfo = "안개";
          break;
      }

      weather.innerText = weatherInfo;

      temp.innerText = `${result.main.temp}.C`;
      icon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
    });
};
const errorPosition = (err) => {
  console.log(err.messagae);
};
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
} else {
  console.log("geolocation is not available");
}

const imgUrl = `https://api.unsplash.com/photos/random?client_id=${unsplash}`;

fetch(imgUrl).then((response) =>
  response.json().then(({ urls: { full } }) => {
    console.log(full);
    const container = document.querySelector(".container");
    container.style.backgroundImage = `url("${full}")`;
  })
);
