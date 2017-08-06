'use strict';

module.exports = function countSameElements(collection) {

    if (!collection || !Array.isArray(collection)) //如果集合为空或集合不是数组
    {
        return;
    }

    var collectionPass = [];
    for (var item in collection) {
        if (collectionPass.some(x => x.key === collection[item])) {
            collectionPass.find(x => x.key === collection[item]).count += 1;
        }
        else {
            collectionPass.push({ key: collection[item], count: 1 });
        }
    }

    /*也可以如下
    let result = [];
    collection.forEach(item => {
        if (result.some(value => value.key === item)) {
            ++result.find(value => value.key === item).count;
        } else {
            result.push({ key: item, count: 1 });
        }
    });
    return result;
    */
    return collectionPass;
}
