// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if (typeof obj === 'string'){
		return "\"" + obj + "\"";
	} else if (typeof obj === 'number' || typeof obj === 'boolean') {
		return obj.toString();
	} else if (obj === null){
		return 'null';
	} else if (Array.isArray(obj)){
		var returnStr = '[';
		if(obj.length <= 0){
			return returnStr += ']'
		} else {
			for(var j = 0; j < obj.length; j++){
				if(j > 0){
					returnStr += ','
				}
				returnStr += stringifyJSON(obj[j]);
			}
			returnStr += ']'
			return returnStr;
		}
	} else if (typeof obj === 'object') {
		var returnString = "";
		var keyArray = Object.keys(obj);
		if(keyArray.length <= 0){
			return '{}';
		} else {
			returnString += "{";
			for(var i = 0; i < keyArray.length; i++){
				if(keyArray[i] == undefined){
					continue;
				}
				var value = obj[keyArray[i]];
				if(value === undefined || typeof value === 'function'){
					continue;
				}
				if(i > 0){
					returnString += ",";
				}
				returnString += '"' + keyArray[i] + '"' + ":" + stringifyJSON(obj[keyArray[i]]);
				}
			returnString += "}"
			}
		return returnString;
	}
  	
};

