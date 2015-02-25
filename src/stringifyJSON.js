// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// console.log("Goal:  " + stringifyJSON([1, [2,4,6], "three"]));
// console.log("Project Goal:  " + stringifyJSON(9) ); // gives --> "[9]"

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var retStr = "";
  var count = 0;
  var delimiter = ""; // "[";

  console.log("> Primitive of value, type: " + obj + ", " + typeof obj + " <");

// if(obj === undefined) { console.log("undefined!!!!!"); }
// if(obj === null) { console.log("null!!!!!"); }
// if(typeof obj === "object") { console.log("AN OBJECT!!!!   Is it null????"); }
// if(obj === "") { console.log("empty!!!!!"); }
// if( Number(obj) === obj ) { console.log("EXACTLY A NUMBER!"); }
// if( String(obj) === obj ) { console.log("EXACTLY A STRING!"); }


  if( obj === undefined ) {
      console.log("undefined value... ignoring.")
      return;

  } else if( obj === null ) {
      console.log("null value... ignoring.")
      return "null";

  } else if( (typeof obj === "number") ){
    console.log("Primitive Number - " + obj + " " + typeof obj);

    // Be warned/Caution JS normally thinks:  typeof NaN === Number

    return String( obj ); // "" + obj + "";
    /*
      9 != '9' --> return obj(==9) fails.
      "" (empty str) + obj + "" (empty str) --> succeeds against '9'
      String( obj ) --> succeeds against '9'

      '' != 'null' --> assert fails with ("" + obj + "").


    */
  } else if ( typeof obj === "boolean" ){
    console.log("Primitive boolean.");
    return "" + obj + "";

  } else if ( typeof obj === "string") {
    console.log("Primitive string.");
    return "\"" + obj + "\"";
  }


  for ( var p in obj ) { 
    // console.log("p = " + p);
    if(count>=1) { delimiter=","; }

    if( obj[p] === undefined ) {
      console.log("undefined value... ignoring.")
      ; // ignore

    } else if((typeof obj[p] === "number") || (typeof obj[p] === "boolean")) {
      console.log("number or boolean.");
      retStr += delimiter + obj[p];

    } else if(typeof obj[p] === "string") {
      console.log("string.");
      retStr += delimiter + "\"" + obj[p] + "\"";

    } else if(typeof obj[p] === "object") {
      console.log("object.");
      retStr += delimiter + stringifyJSON( obj[p] );

    }
    count++;
  };

  return retStr + ""; // "]";
};

// console.log( stringifyJSON( [1, [2,4,6], "three"] ) ) ;
// console.log( "My result:  " + stringifyJSON(9) ) ;


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// JSON.stringify() tests:
// console.log( stringifyJSON( [1, 'false', false] ) );

