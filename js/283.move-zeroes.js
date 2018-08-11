/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums === null || nums.length <= 1) return;

    var nzi = 0, i = 0;
    var l = nums.length;
    for(;i < l; i++) {
        if(nums[i] != 0) {
            var t = nums[nzi];
            nums[nzi] = nums[i];
            nums[i] = t;
            nzi++;
        }
    }
};


var nums = [0,0,1,0,3,12];
moveZeroes(nums)
console.log(nums)

