/**
 * @param {number[]} nums
 * @return {number} that is not duplicated
 */
var singleNumber = function(nums) {
        if(nums){
            var s = new Set();
            for(var i = 0; i<nums.length; i++){
                if(s.has(nums[i])){
                    s.delete(nums[i]);
                }else{
                    s.add(nums[i]);
                }
            }
            if(s.size == 1)
                return s.values().next().value;
        }
        return null;
    };