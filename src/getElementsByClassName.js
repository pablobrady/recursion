// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // "You should use document.body, element.childNodes, and element.classList"
  
  var recurseAndAdd = function(elem, foundElements) {
    if (elem.className.indexOf(className)>=0) {
      console.log("FoundElement (" + className + "):  Adding.");
      foundElements.push(elem);
    };
    console.log("elem = " + elem.nodeName + "; class = " + elem.className + "; childNodes = " + elem.childNodes.length);
    var children = "";
    if ( elem.childNodes.length>0 ) {
      children = elem.childNodes;
      for( var b = 0; b<children.length; b++ ) {
        if(children[b].nodeType === 1) {
          recurseAndAdd(children[b], foundElements);
        }
      }
    } 
  }

/*
  #7:
    READS AS:  
    <p><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></p>

    INTERPRETED AS:
    <p></p><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div><p></p>

*/

  // Initialization
  var retArray = [];
  if (!retArray || !retArray[0] ) { retArray.push( document.getElementsByTagName('body').item(0) ); }


  // Test Elements
  var foundElements = [];
  var startingPoint = document.getElementsByTagName('p').item(0);

  // Main Loop
  recurseAndAdd( startingPoint, foundElements );
  var aSib = startingPoint.nextSibling;
  while( aSib ) {
    console.log("Next root sibling... " + aSib.nodeName + " (" + aSib.className + ")");
    recurseAndAdd( aSib, foundElements );
    aSib = aSib.nextSibling;
  }

  // Add found elements to retArray[1].
  var fLen = foundElements ? foundElements.length : 0;
  for (var i = 0; i < fLen; i++) {
    console.log(foundElements[i]);
    retArray.push( foundElements[i] );
  };

  return retArray;
};