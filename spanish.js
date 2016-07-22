

var magicButton =  document.getElementById("translateButton");
var output = document.getElementById("output");

var userInput = document.getElementById('userInput');
var spanish = document.getElementById("spanish").checked;


function translator (userText) {
  console.log(userText);
    var spanish = {
      merry: "feliz",
      christmas: "navidad",
      and: "y",
      happy: "prospero",
      new: "nuevo",
      year: "ano"
      }
  var sentence = [];
  var newArray = userText.split(" ");
  for (var i = 0; i < newArray.length; i++) {
    for (var trans in spanish) {
      if (newArray[i] === trans) {
        sentence.push(spanish[trans])
        }
    }
  }
console.log(sentence.join(' '));
}


magicButton.addEventListener("click", function () {
  translator(userInput.value)
});





