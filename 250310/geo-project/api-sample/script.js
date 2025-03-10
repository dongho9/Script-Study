const button = document.querySelector("button");
const result = document.querySelector("#result");
const showPosition = (position) => {
  result.innerHTML = `
  <b>위도 : ${position.coords.latitude} </b>, <b>경도 : ${position.coords.longitude} </b>
  `;
};
const errorPosition = (err) => {
  alert(err.message);
};
button.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    const options = {
      enableHighAccuracy: true,
      // 위치에 대한 정확도
      timeout: 5000,
      // 사용자의 정보확인을 위한 유효시간을 설정하는 옵션
      maximumAge: 0,
      // 사용자의 바뀐 위치값을 즉각 확인하도록 하는 옵션
    };

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 300000);
  } else {
    alert("geolocation을 지원하지 않습니다.");
  }
});
