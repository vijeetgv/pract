//10:24am

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var resIdx = -1;
    if(nums!=null && nums.length > 0 && target!=null){
        var l = nums.length;
        var left = 0;
        var right = l-1;
        while(left<=right){
            var mid = Math.floor((left+right)/2);
            if(nums[mid] == target){
                resIdx = mid;
                break;
            }else if(nums[mid] < nums[right]){
                if(target > nums[mid] && target <= nums[right]){
                    left = mid+1;
                }else {
                    right = mid-1;
                }
            }else{
                if(target < nums[mid] && target >= nums[left]){
                    right = mid-1;
                }else{
                    left = mid+1;
                }
            }
        }
    }
    return resIdx;
};

console.log(search([0,1,2,4,5,6,7], 0));
console.log(search([0,1,2,4,5,6,7], 3));
console.log(search([0,1,2,4,5,6,7], 6));
console.log(search([0,1,2,4,5,6,7], 4));
console.log(search([0,1,2,4,5,6,7], 7));
console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,8,1,2], 6));
console.log(search([3,1], 3));
