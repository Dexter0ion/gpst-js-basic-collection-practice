'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var result = [];
  collectionA.forEach(item => {
    result.push({ key: item.key, count: item.count });
  })

  var bValue = objectB.value;
  result.forEach(item => {
    for (var i in bValue) {
      if (item.key === bValue[i]) {
        var countOri = result.find(x => x.key === item.key).count;
        var countChange = parseInt(countOri / 3);
        countOri = countOri - countChange;
        result.find(x => x.key === item.key).count = countOri;
      }
    }
  });
  return result;
}
