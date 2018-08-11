/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var ml = 0;
    if(s!=null && nums!=null){
        var l = nums.length;
        var cs=0, sst = 0;
        ml = Number.MAX_VALUE;
        for(var i=0;i<l;i++){
            cs += nums[i];
            while (cs >= s){
                var sal = i-sst+1; //i-1-sst+1
                if(ml > sal)
                    ml = sal;
                cs -= nums[sst];
                sst++;
            }
        }
        if(ml == Number.MAX_VALUE){
            ml = 0;
        }
    }
    return ml;
};