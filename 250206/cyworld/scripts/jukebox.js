const songs = document.querySelectorAll(".albumTable-song");
let currentAudio = null;

songs.forEach((song) => {
  const playBtn = song.querySelector(".fa-caret-right");
  const pauseBtn = song.querySelector(".fa-pause");
  // console.log(playBtn, pauseBtn);
  playBtn.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");
    // closest = 가장 가까이 있는 td
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }
    audio.play();
    currentAudio = audio;
  });

  pauseBtn.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");
    audio.pause();
    if (currentAudio === audio) {
      currentAudio = null;
    }
  });
});
