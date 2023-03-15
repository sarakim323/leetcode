/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    let result = {};
    for (let str of strs) {
        let sortedStr = [...str].sort().join('');
        if (!result[sortedStr]) {
            result[sortedStr] = [];
        }
        result[sortedStr].push(str);
    }
    return Object.values(result);
};