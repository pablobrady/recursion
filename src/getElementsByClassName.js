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

  var findDescendants = function(testElement, foundElements) {
    while( testElement ) {
      console.log("(TEST)");
      console.log(testElement);
      if( doesElementContainTargetClass( testElement.classList ) ) {
        console.log("-- RETARRAY(" + retArray.length + ")  FOUND!");
        foundElements.push( testElement );
      } else {
        console.log("------- Checking Grandchild -------");
        console.log(retArray);
        // var lineage = getElementsByClassName(className, retArray[1]);
      }
      testElement = testElement.nextSibling;
    }
    return foundElements;
  };
  

  // Initialization
  var retArray = [];
  if (!retArray || !retArray[0] ) { retArray.push( document.getElementsByTagName('body').item(0) ); }

  // Test Elements
  console.log("Does ELEMENT contain Target Class?");
  var testElement = document.getElementsByTagName('p').item(0);
  var foundElements = [];

  // Find the Elements (current, child-element, grand-child-elements, etc.)
  foundElements = findDescendants(testElement, foundElements);

  // Add found elements to retArray.
  var fLen = foundElements ? foundElements.length : 0;
  for (var i = 0; i < fLen; i++) {
    console.log("ADDING FOUND ELEMENT(S)...");
    console.log(foundElements[i]);
    retArray.push( foundElements[i] );
  };

  // if(retArray.length<=1) {
  //   console.log("KEEP LOOKING....");
  // }

  return retArray;
};