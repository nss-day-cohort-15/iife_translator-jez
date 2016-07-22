
function translateToSpanish (userText) {
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
 return sentence.join(' ');
}

