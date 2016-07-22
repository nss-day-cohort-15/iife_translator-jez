var Translator = (function(frenchTranslator) {
  frenchTranslator.translateToFrench = function (userText) {
      var french = {
        hello: 'bonjour',
        merry: 'joyeux',
        christmas:'Noël'
        }
    var sentence = [];
    var newArray = userText.split(" ");
    for (var i = 0; i < newArray.length; i++) {
      for (var trans in french) {
        if (newArray[i] === trans) {
          sentence.push(french[trans])
          }
      }
    }
    return sentence.join(' ');
  }
return frenchTranslator;
})(Translator || {});
