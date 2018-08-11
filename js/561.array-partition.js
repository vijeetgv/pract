/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var s = 0;
    if(nums){
        var n = nums.length/2;
        var sortedNums = nums.sort(function (a, b) { return b-a; });

        for(var i=1;i<n*2; i += 2){
            s += sortedNums[i]
        }
    }
    return s;
};
