// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];

  var searchNodes = function(element){
    if (element.classList !== undefined){         //check if element has class name
      var parts = element.className.split(" ");      
      if (parts.indexOf(className) >= 0){         //check if element class name is target class name
        results.push(element)                     //if so, push to results
        console.log(element);
      }
    }
    for (var i=0 ; i<element.childNodes.length ; i++){
      searchNodes(element.childNodes[i]);         //run searchNodes on all children
    }
  };

  searchNodes(document.body);



  return results;
};
