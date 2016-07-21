console.log(Team JEZ Translator)


var translator = (function(translator) {
  var spanish = {
    merry: "feliz",
    christmas: "navidad",
    and: "y",
    happy: "prospero",
    new: "nuevo",
    year: "ano"
    }

  translator.toSpanish = function() {
      return spanish;
  }

  return translator;

})(translator);
