// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// console.log(stringifyJSON([1, 'lazy', [ 4, 5, 6], false]));

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var retStr = "";
  var count = 0;
  var delimiter = "";

  if(count>=1) { delimiter=","; }

  for ( var p in obj ) { 

    if((typeof obj[p] === "number") || (typeof obj[p] === "boolean")) {
      retStr += delimiter + obj[p];

    } else if(typeof obj[p] === "string") {
      retStr += delimiter + "\"" + obj[p] + "\"";

    } else if(typeof obj[p] === "object") {
      retStr += delimiter + "[" + stringifyJSON( obj[p] ) + "]";

    }
    count++;
  };

  return retStr;
};

console.log( stringifyJSON( [1, [2,4,6], "three"] ) ) ;

