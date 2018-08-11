/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var res;
    if(nums!=null && target!=null){
        var mpNums = {};
        var l = nums.length;
        for(var i = 0; i< l; i++){
            var othi = mpNums[target-nums[i]];
            if(othi!=null){
                res = [othi, i];
                break;
            }
            mpNums[nums[i]] = i;
        }
    }
    return res;
};


console.log(twoSum([0,4,3,0], 0));