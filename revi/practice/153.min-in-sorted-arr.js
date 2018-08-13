//10:32am
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var resIdx = -1;
    if(nums!=null && nums.length){
        var l = 0;
        var r = nums.length-1;
        if(nums[l]<nums[r]){
            resIdx = l;
        }else{
            while(l<r){
                var mid = Math.floor((l+r)/2);
                if(nums[mid] > nums[r]) {
                    l = mid + 1
                }else
                    r = mid;
            }
            resIdx = l;
        }
    }
    return resIdx;
};
console.log(findMin([0,1,4,5,6,7,8]));
console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([4,5,6,7,8,1,2]));
console.log(findMin([3,1]));