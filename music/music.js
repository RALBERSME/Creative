const music = document.querySelector(".music");

function playSong() {
  const music = new Audio("harmonica.mp3");
  music.play();
}

music.addEventListener("click", () => {
  playSong();
});
//song is from JuliusH
