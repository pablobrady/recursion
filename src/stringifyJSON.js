// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var array = [];

	if ( Array.isArray(obj) ) {
		var buffer = [];

		for (var i = 0; i < obj.length; i++) {
			if(typeof obj[i] === "string") {
				buffer.push( '"' + obj[i] + '"' );
			} else if ( Array.isArray(obj[i]) ) {
				buffer.push( stringifyJSON(obj[i]) );
			} else if ( typeof obj[i] === "object" ) {
				buffer.push( stringifyJSON(obj[i]) );
			} else {
				buffer.push( obj[i] );
			}
		};

		array.push( '[' +  buffer.join() + ']' );
	

		return array.join();
	}

	if ( typeof obj === "object" ) {
		var oBuffer = [];

		if(obj===null) {
			return 'null';
		}

		for (var key in obj) {
			if ( typeof obj[key] === "function"  || typeof obj[key] === "undefined") {
				continue;
			} else if ( typeof obj[key] == "string") {
				oBuffer.push( '"' + key + '":"' + obj[key] + '"' );
			} else if(obj[key]===null) {
				oBuffer.push( '"' + key + '":' + 'null' );
		  } else if ( typeof obj[key] === "object" ) {
		  	oBuffer.push( '"' + key + '":' + stringifyJSON(obj[key]) );
		  } else {
				oBuffer.push( '"' + key + '":' + obj[key] );
			}
		}

		array.push ('{' + oBuffer + '}');

		return array.join();
	}


	if(typeof obj == "string"){
		return '"' + obj + '"';
	}

  return "" + obj;
};



