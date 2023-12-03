var btn = document.getElementById("submit");
btn.addEventListener("click", func);

function func() {
  const mytext = document.getElementById("text").value;
  const secondText =
    "It could sound better. You can learn to become a great speaker. This project is unfortunately still under construction....It will be updated in the next few months. See you then again.";
  var msg = new SpeechSynthesisUtterance();
  msg.text = mytext + secondText;
  window.speechSynthesis.speak(msg);

  alert(
    "Oh my dear friend, - wasn`t that horrible? We will show you how to become a better speaker...at the moment, this project is unfortunately still under construction....It will be updated in the next few months. See you then again. For now you might enjoy the other parts of myCreativity page. Thanks."
  );
}
