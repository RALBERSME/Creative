const music = document.querySelector(".music");

function playSong() {
  const music = new Audio("cheerful.mp3");
  music.play();
}

music.addEventListener("click", () => {
  playSong();
});
//song is from JuliusH
