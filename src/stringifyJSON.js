// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// // but you don't so you're going to write it from scratch:
// var stringifyJSON = function(obj) {
//   // your code goes here
// };


var stringifyJSON = function (obj) {
  var quotes = "";

   function returnSelf (otherObj){
      quotes += otherObj;
      return quotes;
   }

   function returnString (otherObj){
      quotes += "\"" + otherObj + "\"";
      return quotes;
   }

   function returnZero (otherObj) {
      quotes += "[]";
      return quotes;
   }
   
   function returnArray (otherObj){
     quotes += '[';
     var len = otherObj.length;
     for (var i = 0; i < len; i++){
                stringify(otherObj[i]);
                if (i < len - 1){
                    quotes += ','
                }
            }
            quotes += ']';
            return quotes;
   }

    function returnObj (otherObj){
    	var keys = [];

    	for (key in otherObj){
                keys.push(key);  
            }
            if (keys.length === 0){
                quotes += "{}";
            } else {
         quotes += '{';
                for (var i = 0; i < keys.length; i ++){
                    if (typeof otherObj[keys[i]] !== "function" && otherObj[keys[i]] !== undefined){
                        stringify(keys[i]);
                        quotes +=':';
                        stringify(otherObj[keys[i]]);
                        if (i < keys.length - 1){
                            quotes += ','
                        }
                    }
                }
                quotes += '}';
                           }
         }

    var stringify = function (otherObj){
        if ((typeof otherObj === "number"|| typeof otherObj === "boolean" || otherObj === undefined || otherObj === null)){
            returnSelf(otherObj);
        }else if(typeof otherObj === "string"){ 
            returnString(otherObj);
        }else if (otherObj.length === 0){
            returnZero(otherObj);
        }else if (otherObj.length){
            returnArray(otherObj);
        }
         else {
          returnObj(otherObj);
        }


      return quotes;  

    };

   // var stringify = function (otherObj){
   //  switch(typeof otherObj){
   //    case "number" || "boolean" || undefined || null :
   //      return returnSelf(otherObj);
   //      break;
   //    case "string":
   //      return returnString(otherObj);
   //      break;
   //    case 0:
   //      return returnZero(otherObj);
   //      break;
   //    case "object":
   //      return returnObject(otherObj);
   //      break;
   //    default:
   //      return returnLen(otherObj);
   //      break;
   //     }

   // };

    stringify(obj);
  return quotes;
};





















