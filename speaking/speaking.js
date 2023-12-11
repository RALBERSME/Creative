var btn = document.getElementById("submit");
btn.addEventListener("click", func);

function func() {
  const mytext = document.getElementById("text").value;
  const secondText =
    "It could sound better. You can learn to become a great speaker.Therefore continue the course by pressing the black button below. You will find a lot of material, tips and tricks to improve your speaking skills. Good luck.";
  var msg = new SpeechSynthesisUtterance();
  msg.text = mytext + secondText;
  window.speechSynthesis.speak(msg);

  alert(
    "Oh my dear friend, - wasn`t that horrible? We will show you how to become a better speaker...Therefore continue the course by pressing the black button below. You will find a lot of material, tips and tricks to improve your speaking skills. Good luck."
  );
}
