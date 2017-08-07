'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  //统计重复字母
  var result = [];
  collectionA.forEach(item => {
    var multiPattern = /(\w)-(\d)/; //正则表达式 用于匹配"d-5" \w是非单词字符 \d是数字0-9

    if (multiPattern.test(item)) {
      console.log(item);
      var multiExec = multiPattern.exec(item);
      //以下测试multiExec各个下标指代
      /*
      console.log("multiExec[0]:" + multiExec[0]);
      console.log("multiExec[1]:" + multiExec[1]);
      console.log("multiExec[2]:" + multiExec[2]);
      
         结果
         multiExec[0]:d-5
         multiExec[1]:d
         multiExec[2]:5
       */
      if (result.some(x => x.key === multiExec[1])) {
        result.find(x => x.key === multiExec[1]).count += parseInt(multiExec[2], 10);
      }
      else {
        result.push({ key: multiExec[1], count: parseInt(multiExec[2], 10) });
      }
    }

    else if (!multiPattern.test(item)) {
      if (result.some(x => x.key === item)) {
        result.find(x => x.key === item).count += 1;
      }
      else {
        result.push({ key: item, count: 1 });
      }
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
