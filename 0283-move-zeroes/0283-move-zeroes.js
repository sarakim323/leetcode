/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (Array.isArray(nums) === 'false' || nums.length === 0) {
        return null;
    }
    for (let i = nums.length-1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.push(0);
            nums.splice(i, 1);
        }
    }
    return nums;
};