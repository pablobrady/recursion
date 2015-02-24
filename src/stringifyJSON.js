// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// console.log(stringifyJSON([1, 'lazy', [ 4, 5, 6], false]));

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
console.log(obj);

  var retStr = "";

  // var object = function objectIsEmpty( o ) {
  //   for ( var p in o ) { 
  //     if ( o.hasOwnProperty( p ) ) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // if (!objectIsEmpty(obj)) {
  //   return obj;
  // }

  // if (!obj) {
  //   return obj;
  // }

  var count = 0;
  for ( var p in obj ) { 
    var delimiter = "";

    if(count>=1) { delimiter=","; }

    if((typeof obj[p] === "number") || (typeof obj[p] === "boolean")) {
      retStr += delimiter + obj[p];
      // delete obj[p];
    } else if(typeof obj[p] === "string") {
      retStr += delimiter + "\"" + obj[p] + "\"";
      // delete obj[p];
    } else if(typeof obj[p] === "object") {
      console.log("Recursion...");
      retStr += delimiter + stringifyJSON( obj[p] );
      // delete obj[p];
    }
    count++;
  };
  console.log("retStr = " + retStr);


  return obj;
};

console.log( stringifyJSON( [1, [2,4,6], "three"] ) ) ;

