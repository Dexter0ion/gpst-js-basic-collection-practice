'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var result = [];
  collectionA.forEach(item => {
    console.log(item.key);
    console.log(item.count);
    result.push({ key: item.key, count: item.count });
  });

  console.log(result);

  for (var i in collectionA) {
    for (var j in objectB.value) {
      if (objectB.value[j] === collectionA[i].key) {
        result.find(x => x.key === objectB.value[j]).count -= 1;
      }

    }

  }


  console.log(result);
  return result;
}
