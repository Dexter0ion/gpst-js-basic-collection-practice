'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
      
      var collectionC = new Array();//返回的集合 内有A、B集合内两相同元素
      for(let aElement in collectionA)
      {
            for(let bElement in collectionB)
            {
                  if(collectionA[aElement] === collectionB[bElement])
                  {
                        var cElementPush = collectionA[aElement];
                        collectionC.push(cElementPush);
                  }
            }
      }
      console.log(collectionC);
  return collectionC;
}
