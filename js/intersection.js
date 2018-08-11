/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1 && nums2){
        var nums1Map = {};
        nums1.some(function (val) {
            nums1Map[val] = true;
        });
        var intersecSet = new Set();
        nums2.some(function (val, i) {
            if(nums1Map[val]){
                intersecSet.add(val);
            }
        });
        return Array.from(intersecSet);
    }
    return [];
};