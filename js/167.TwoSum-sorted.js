/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var res;
    if(nums!=null && target!=null){
        var numsIdxs = new Map();
        var l = nums.length;

        for(var i=0; i< l; i++){
            var complementary = target - nums[i];
            var ci = numsIdxs.get(complementary);
            if(ci != null){
                res = [ci, i+1];
                break;
            }else{
                numsIdxs.set(nums[i], i+1);
            }
        }
    }
    return res;
};
