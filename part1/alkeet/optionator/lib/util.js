// Generated by LiveScript 1.6.0
(function(){
  var prelude, map, sortBy, fl, closestString, nameToRaw, dasherize, naturalJoin;
  prelude = require('prelude-ls'), map = prelude.map, sortBy = prelude.sortBy;
  fl = require('fast-levenshtein');
  closestString = function(possibilities, input){
    var distances, ref$, string, distance;
    if (!possibilities.length) {
      return;
    }
    distances = map(function(it){
      var ref$, longer, shorter;
      ref$ = input.length > it.length
        ? [input, it]
        : [it, input], longer = ref$[0], shorter = ref$[1];
      return {
        string: it,
        distance: fl.get(longer, shorter)
      };
    })(
    possibilities);
    ref$ = sortBy(function(it){
      return it.distance;
    }, distances)[0], string = ref$.string, distance = ref$.distance;
    return string;
  };
  nameToRaw = function(name){
    if (name.length === 1 || name === 'NUM') {
      return "-" + name;
    } else {
      return "--" + name;
    }
  };
  dasherize = function(string){
    if (/^[A-Z]/.test(string)) {
      return string;
    } else {
      return prelude.dasherize(string);
    }
  };
  naturalJoin = function(array){
    if (array.length < 3) {
      return array.join(' or ');
    } else {
      return array.slice(0, -1).join(', ') + ", or " + array[array.length - 1];
    }
  };
  module.exports = {
    closestString: closestString,
    nameToRaw: nameToRaw,
    dasherize: dasherize,
    naturalJoin: naturalJoin
  };
}).call(this);
