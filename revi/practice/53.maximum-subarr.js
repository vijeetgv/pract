/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var result = 0;
    if(nums){
        var subArrTotal = result = nums[0];
        for(var i=0; i< nums.length; i++){
            //maxSubArraySum(A, i) = (maxSubArraySum(A, i - 1) > 0 ? maxSubArraySum(A, i - 1) : 0) + A[i];
            subArrTotal = nums[i] + (subArrTotal>0?subArrTotal:0);
            result = Math.max(result, subArrTotal);
        }
    }
    return result;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-1]));