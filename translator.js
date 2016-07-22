var magicButton =  document.getElementById("translateButton");
var output = document.getElementById("output").innerHTML;

var userInput = document.getElementById('userInput');

var spanish = document.getElementById("spanish").checked;
var french = document.getElementById("french").checked;
var ethiopian = document.getElementById("ethiopian").checked;











magicButton.addEventListener("click", function () {
  translator(userInput.value)
});
