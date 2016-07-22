
function translateToEthiopian (userText) {
  console.log(userText);
    var ethiopian = {
     merry: "melkam",
     christmas: "gena",
     and: "ena",
     happy: "melkam",
     new: "adis",
     year: "amet"
     }
  var sentence = [];
  var newArray = userText.split(" ");
  for (var i = 0; i < newArray.length; i++) {
    for (var trans in ethiopian) {
      if (newArray[i] === trans) {
        sentence.push(ethiopian[trans])
        }
    }
  }

  return sentence.join(' ');
}
