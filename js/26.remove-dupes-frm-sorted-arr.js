/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums === null) return 0;
    if(nums.length <= 1) return nums.length;

    var p1 = 0, p2 = 1;
    while(p2 < nums.length) {
        if(nums[p1] === nums[p2]) {
            p2++;
        }else{
            nums[++p1] = nums[p2];
        }
    }
    return p1 + 1;
};
