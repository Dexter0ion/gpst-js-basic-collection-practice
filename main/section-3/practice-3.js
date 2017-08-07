'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  //统计重复字母
  var result = [];

  collectionA.forEach(item => {
    if (result.some(x => x.key === item)) {
      result.find(x => x.key === item).count += 1;
    }
    else {
      result.push({ key: item, count: 1 });
    }
  });

  //统计与objectB中重复字母并满3减1
  var bValue = objectB.value;
  result.forEach(item => {
    for (var i in bValue) {
      if (item.key === bValue[i]) {
        var countBefore = result.find(x => x.key === item.key).count;
        var countAfter = countBefore - parseInt(countBefore / 3);
        result.find(x => x.key === item.key).count = countAfter;
      }
    }
  });

  return result;
}
