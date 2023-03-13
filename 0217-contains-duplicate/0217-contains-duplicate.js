/**
 * @param {number[]} nums
 * @return {boolean}
 */
// I - array of numbers
// O - boolean
var containsDuplicate = function(nums) {
    const count = {};
    for(let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (count[current]) {
            return true;
        } else {
            count[current] = 1;
        }
    }
    return false;
};