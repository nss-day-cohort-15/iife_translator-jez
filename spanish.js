console.log(Team JEZ Translator)


var userText = document.getElementById('userInput').value
document.getElementById("translateButton").addEventListener("onClick");

function translator (userText) {
  var var spanish = {
      merry: "feliz",
      christmas: "navidad",
      and: "y",
      happy: "prospero",
      new: "nuevo",
      year: "ano"
      }
  var sentence = [];
  var userText = "";
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

translator(userText)



