// this is what you would do if you liked things to be easy:
var stringifyJSON = JSON.stringify;
console.log("Goal:  " + stringifyJSON([1, [2,4,6], "three"]));

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var retStr = "[";
  var count = 0;
  var delimiter = "";

  for ( var p in obj ) { 

    if(count>=1) { delimiter=","; }

    if((typeof obj[p] === "number") || (typeof obj[p] === "boolean")) {
      retStr += delimiter + obj[p];

    } else if(typeof obj[p] === "string") {
      retStr += delimiter + "\"" + obj[p] + "\"";

    } else if(typeof obj[p] === "object") {
      retStr += delimiter + stringifyJSON( obj[p] );

    }
    count++;
  };

  return retStr + "]";
};

console.log( stringifyJSON( [1, [2,4,6], "three"] ) ) ;

