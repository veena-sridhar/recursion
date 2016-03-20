// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  	var findNodes = function (element){
		var result = [];
		if (element.classList && element.classList.contains (className)) {
			result.push(element);
		}
		var children = element.childNodes;
		for (var i = 0; i < children.length; i++){
			var resultsFromChild = findNodes (children[i]);
			result = result.concat (resultsFromChild);
		}
		return result;
	}
	return findNodes (document);
};
