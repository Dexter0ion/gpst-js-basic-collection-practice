'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
      
      var collectionC = new Array();
      var collectionBInner = collectionB[0];//期待是B集合的子集合
      for(let i in collectionA)
      {
            for(let j in collectionBInner)
            {
                  if(collectionA[i]===collectionBInner[j])
                  {
                        var elementPush = collectionA[i];
                        collectionC.push(elementPush);
                  }
            }
      }
  return collectionC;
}
