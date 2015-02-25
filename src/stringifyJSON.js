// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// console.log("Goal:  " + stringifyJSON([1, [2,4,6], "three"]));

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var retStr = "";
  var count = 0;
  var delimiter = "[";

  // console.log('' + obj + ' (' + typeof obj + '):');

  var stringifiableValue = function(testValue) {
    if (testValue === undefined ) { return false; };
    if (typeof testValue === "function") { return false; };
    return true; 
  }

  // EMPTY TESTS...
  if( obj === undefined ) {
    return;

  } else if( obj === null ) {
    return 'null';


  // ARRAY TESTS...
  } else if( Array.isArray(obj) && obj.length==0 ){
    return '[]';

  } else if( Array.isArray(obj) && obj.length>0 ){
    retStr += '[';
    for (var arrIdx = 0; arrIdx < obj.length; arrIdx++) {
      retStr += (arrIdx>0 ? "," : "") + stringifyJSON( obj[arrIdx] );
    };
    retStr += ']';
    return retStr;


  // PRIMITIVE TESTS...
  } else if( (typeof obj === 'number') ){
    return String( obj ); 

  } else if ( typeof obj === 'boolean' ){
    return '' + obj + '';

  } else if ( typeof obj === 'string' ) {
    return '"' + obj + '"';
  
  } else if ( typeof obj === 'object' ) {
    retStr += "{";
    var oCount = 0;
    for ( var oKey in obj ) { 
      if ( stringifiableValue(obj[oKey])==false ) {
        retStr += '}';
        return retStr;
      } else {
        retStr += (oCount>0 ? ',' : '') + '"' + oKey + '":' + stringifyJSON( obj[oKey] );
        oCount++;
     }
    };
    retStr += "}";
    return retStr;

  }

  // Dropthru... shouldn't happen.
  return retStr + ']';
};

