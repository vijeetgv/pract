//1:41pm
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var opt = [];
    if(nums){
        var n = nums.length;
        opt.push(1);
        for(var i = 1; i< n; i++){
            opt[i] = nums[i-1]*opt[i-1];
        }
        var right = 1;
        for(var i= n-1; i>=0; i--){
            opt[i] *= right;
            right *= nums[i];
        }
    }
    return opt;
};

console.log(productExceptSelf([1,2,3,4]));

//1,2,3,4

//1,2,6,24
//     ,24 //24