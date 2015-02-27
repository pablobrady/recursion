// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // console.log("className = " + className);  // targetClassName

  // You should use document.body, element.childNodes, and element.classList
  
  // Generic Body
  var retArray = [];
  retArray.push( document.getElementsByTagName('body').item(0) );


  // ================

  // 1)
  retArray.push( document.getElementsByTagName('p').item(0) );

  // 2) 
  // retArray.push( document.getElementsByTagName('p').item(0) );

  // 3
  // retArray.push( document.getElementsByTagName('p').item(0).nextSibling );

  // 4
  // retArray.push( document.getElementsByTagName('p').item(0).nextSibling );
  // retArray.push( document.getElementsByTagName('p').item(0).nextSibling.nextSibling );

  // 5
  // retArray.push( document.getElementsByTagName('p').item(0).nextSibling.nextSibling.nextSibling );

  // 6
  // retArray.push( document.getElementsByTagName('p').item(0).nextSibling );
  // retArray.push( document.getElementsByTagName('p').item(0).nextSibling.nextSibling );

  // 7
  // retArray.push( document.getElementsByTagName('p').item(0).nextSibling.firstChild.firstChild );


  // var workingStr = retArray[1];
  console.log("TEST LOG:");
  var elements = document.getElementsByTagName('p');
  for (var i = 0; i < elements.length; i++) {
    var temp = String(elements[i]);
    if( temp.indexOf("targetClassName")) {
      console.log("FOUND!");
    }
    console.log(elements[i]);
  };
  console.log("TEST LOG END.");


  return retArray;

};