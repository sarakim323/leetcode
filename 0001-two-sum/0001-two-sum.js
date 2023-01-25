/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // I - array of integers, target integer
 // O - array of indices of the 2 numbers adding up to be the target integer
 // C - use element once, there's only one solution
 // E - 
var twoSum = function(nums, target) {
    // create a result variable to store the indices
    // iterate over the nums array with i = 0
        // iterate over the nums array with j = 1
        // if nums[i] + nums[j] = target, then push i and j into result
    // return the result
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
};