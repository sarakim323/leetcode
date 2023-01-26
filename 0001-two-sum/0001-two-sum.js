/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target, map = new Map()) {
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const complement = target - num;
        const compIndex = map.get(complement);
        const isTarget = map.has(complement);
        if(isTarget) {
            return [index, compIndex];
        }
        map.set(num, index);
    }
    return null;
};