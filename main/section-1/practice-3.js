'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
      
      var collectionC = new Array();
      var objectBValue = new Array();
      var objectBValue = objectB.value;
      
      for(var i in collectionA)
      {
            for(var j in objectBValue)
            {
                  if(collectionA[i]===objectBValue[j])
                  {
                        var elementPush = collectionA[i];
                        collectionC.push(elementPush);      
                  }
            }
      }
         
      return collectionC;
}
