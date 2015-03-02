// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];
  var body = document.body;

  var searchNodes = function(child){
  	for (var i=0 ; i<child.childNodes.length ; i++) {
  		if (child.childNodes[i].className){
		  	var parts = child.childNodes[i].className.split();
		  	if (parts.indexOf(className) >= 0){
		  		results.push(child.childNodes[i]);
		  	}
		  }
	  	searchNodes(child.childNodes[i]);
  	}
  };

  for (var i=0 ; i<body.childNodes.length ; i++) {
  	if (body.childNodes[i].className){
	  	var parts = body.childNodes[i].className.split();
	  	if (parts.indexOf(className) >= 0){
	  		results.push(body.childNodes[i]);
  		}
  	}
  	searchNodes(body.childNodes[i]);
  };



  return results;
};
