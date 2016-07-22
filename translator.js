var magicButton =  document.getElementById("translateButton");

magicButton.addEventListener("click", function () {
  var spanish = document.getElementById("spanish").checked;
  var french = document.getElementById("french").checked;
  var ethiopian = document.getElementById("ethiopian").checked;

  var userInput = document.getElementById('userInput');
  var output = document.getElementById("output");

  if (spanish) {
    output.innerHTML = Translator.translateToSpanish(userInput.value)
  } else if (french) {
    output.innerHTML = Translator.translateToFrench(userInput.value)
  } else if (ethiopian) {
    output.innerHTML = Translator.translateToEthiopian(userInput.value)
  }
});
