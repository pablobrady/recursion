// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // console.log("className = " + className);  // targetClassName

console.log("------------------------");

  // You should use document.body, element.childNodes, and element.classList
  
  var doesElementContainTargetClass = function(aClassList) {
    if (!aClassList) { return false; }

    var isFound = false;
    for(var p=0; p<aClassList.length; p++) {
      if (aClassList[p]===className) {
        isFound = true;
      }
    }
    return isFound;
  };

  var recurseAndAdd = function(elem, foundElements) {
    console.log("recurseAndAdd.");
    foundElements.push(elem);
    var children = elem.childNodes;
    console.log("LOWER LEVEL - B");
    console.log(children); // !!!!!!!!
    for( var b = 0; b<children.length; b++ ) {
      if(children[b].nodeType === 1) {
        recurseAndAdd(children[b], foundElements);
      }
    }
  }


  // Initialization
  var retArray = [];
  if (!retArray || !retArray[0] ) { retArray.push( document.getElementsByTagName('body').item(0) ); }


  // Test Elements
  var foundElements = [];


  // PARENT LOOP
  for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
    var testElement = document.getElementsByTagName('p').item(i);
    if ( doesElementContainTargetClass(testElement.classList) ) {
      foundElements.push(testElement);
    }
    console.log("testElement:");
    console.log(testElement);
    var topChildNodes = testElement.childNodes;
    console.log("topChildNodes = " + topChildNodes.length);
    for( var a = 0; a < topChildNodes.length; a++ ) {
      if (topChildNodes[a].nodeType === 1) {
        console.log("TOP LEVEL - A");
        console.log(topChildNodes[a]); // !!!!!!!!
        recurseAndAdd(topLevel[a], foundElements);
      }
    }
  };


  // Add found elements to retArray.
  var fLen = foundElements ? foundElements.length : 0;
  for (var i = 0; i < fLen; i++) {
    console.log("ADDING FOUND ELEMENT(S)...");
    console.log(foundElements[i]);
    retArray.push( foundElements[i] );
  };

  return retArray;
};