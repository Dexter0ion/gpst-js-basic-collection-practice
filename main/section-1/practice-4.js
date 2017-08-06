'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var collectionAKey = [];
    collectionAKey = collectionA.map(x => x.key); //使用map基本操作
    /*
    for(var keys in collectionA)
    {
          collectionAKey.push(collectionA[keys])
    }*/
    console.log(collectionAKey);
    var objectBValue = new Array();
    var objectBValue = objectB.value;

    var collectionC = [];
    for (var i in collectionAKey) {
        for (var j in objectBValue) {
            if (collectionAKey[i] === objectBValue[j]) {
                var elementPush = collectionAKey[i];
                collectionC.push(elementPush);
            }
        }
    }
    return collectionC;
}
