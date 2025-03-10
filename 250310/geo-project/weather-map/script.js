const url =
  "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=gocamping&serviceKey=lNyUEZTjg75nJOs0U8Um4LqJBvhgVaDek6puz%2BCeQVxMHtxQ9vx2OYmzYJQXnV%2BA3FdL%2B4vOo3j%2BGC4Cr4Drhg%3D%3D&_type=json";

fetch(url)
  .then((response) => response.json())
  .then((result) => console.log(result));
const showPosition = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  var container = document.getElementById("map");
  var options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };

  var map = new kakao.maps.Map(container, options);

  var clusterer = new kakao.maps.MarkerClusterer({
    map: map,
    averageCenter: true,
    minLevel: 10,
  });

  var positions = [
    {
      title:
        "<div style='padding: 5px; font-size:0.8rem;'>EZEN DX CENTER</div>",
      latlng: new kakao.maps.LatLng(latitude, longitude),
    },
    {
      title:
        "<div style='padding: 5px; font-size:0.8rem;'>하이미디어 강남캠퍼스</div>",
      latlng: new kakao.maps.LatLng(37.4987358, 127.0266779),
    },
    {
      title:
        "<div style='padding: 5px; font-size:0.8rem;'>그린아카데미 강남캠퍼스</div>",
      latlng: new kakao.maps.LatLng(37.5001513, 127.0290763),
    },
    {
      title:
        "<div style='padding: 5px; font-size:0.8rem;'>SBS아카데미 강남캠퍼스</div>",
      latlng: new kakao.maps.LatLng(37.5018484, 127.0246576),
    },
  ];

  var imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

  let markers = [];

  for (var i = 0; i < positions.length; i++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng, // 마커를 표시할 위치
      title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    });

    markers.push(marker);

    var infoWindow = new kakao.maps.InfoWindow({
      content: positions[i].title,
    });

    function makeOverListener(map, marker, infoWindow) {
      return function () {
        infoWindow.open(map, marker);
      };
    }
    function makeOutListener(infoWindow) {
      return function () {
        infoWindow.close();
      };
    }

    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infoWindow)
    );
    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infoWindow)
    );
  }

  clusterer.addMarkers(markers);
};

const errorPosition = (err) => {
  console.log(err.message);
};
navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
