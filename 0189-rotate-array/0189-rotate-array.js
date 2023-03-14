/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let length = nums.length;
    let result = [...nums];
    
    for (let i = 0; i < length; i++) {
        let index = (i + k) % length;
        nums[index] = result[i];
    };
    return nums;
};