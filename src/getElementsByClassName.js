// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

var getElementsByClassName = function (className) {
   var hits = [];
   searchForClass(document.body);

function hasClass(element, clss) {
    return (' ' + element.className + ' ').indexOf(' ' + clss + ' ') > -1;
}

  function searchForClass(searchClass){
 
  if (hasClass(searchClass, className)){
  	console.log("Found class" + searchClass);
  	hits.push(searchClass);
  }
  else 
  	console.log("Sorry, your class was not found.");

  	for(var i=0; i<searchClass.children.length; i++){
 		searchForClass(searchClass.children[i]);
  	}

  }

  return hits;
};















