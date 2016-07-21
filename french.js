
function translator (userText) {
var lexicon = { hello: 'bonjour', merry: 'joyeux', christmas:'Noël'};
var sentence = [];
var userText = "hello merry christmas";
var newArray = userText.split(" ");
for (var i = 0; i < newArray.length; i++) {
  for (var trans in lexicon) {
    if (newArray[i] === trans) {
      sentence.push(lexicon[trans])
      }
  }
}
console.log(sentence.join(' '));
}
translator(userText);
