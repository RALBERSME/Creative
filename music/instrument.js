const harmonica1 = document.querySelector(".harmonica1");

function playSong1() {
  const music = new Audio("harmonica1.mp3");
  music.play();
}

harmonica1.addEventListener("click", () => {
  playSong1();
});
//
const harmonica2 = document.querySelector(".harmonica2");

function playSong2() {
  const music = new Audio("harmonica2.mp3");
  music.play();
}

harmonica2.addEventListener("click", () => {
  playSong2();
});
//
const harmonica3 = document.querySelector(".harmonica3");

function playSong3() {
  const music = new Audio("harmonica3.mp3");
  music.play();
}

harmonica3.addEventListener("click", () => {
  playSong3();
});
//
const accordion1 = document.querySelector(".accordion1");

function playSong4() {
  const music = new Audio("accordion1.mp3");
  music.play();
}

accordion1.addEventListener("click", () => {
  playSong4();
});
//

const accordion2 = document.querySelector(".accordion2");

function playSong5() {
  const music = new Audio("accordion2.mp3");
  music.play();
}

accordion2.addEventListener("click", () => {
  playSong5();
});
//
const accordion3 = document.querySelector(".accordion3");

function playSong6() {
  const music = new Audio("accordion3.mp3");
  music.play();
}

accordion3.addEventListener("click", () => {
  playSong6();
});
//

const stopSongs = document.querySelector(".stopSong");

function stopSong() {
  location.reload();
}

stopSongs.addEventListener("click", () => {
  stopSong();
});
