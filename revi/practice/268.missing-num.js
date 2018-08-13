//9:13am
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var missing;
    if(nums!=null && nums.length){
        var l = nums.length;
        var gaussSum = l*(l+1)/2;
        var linearSum = 0;
        for(var i=0; i< l; i++)
            linearSum += nums[i];
        missing = gaussSum - linearSum; //will handle 0 also
    }
    return missing;
};