/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var mc = 0;
    if(nums!=null){
        var l = nums.length;
        var cc = 0;
        for(var i=0; i< l; i++){
            if(nums[i] === 1){
                cc++;
            }else if(cc > 0){
                if(cc > mc)
                    mc = cc;
                cc = 0;
            }
        }
        if(cc > mc)
            mc = cc;
    }
    return mc;
};