/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function(a1, a2) {
    var arr1 = a1.length >= a2.length ? a1 : a2;
    var arr2 = a1.length >= a2.length ? a2 : a1;
    var needTwo  = (arr1.length+arr2.length+1) % 2;
    var l1  = Math.floor((arr1.length+1)/2);
    var count = 1;

    do {
        if (count++ > 1000) return;

        var l2   = Math.floor((arr1.length+arr2.length+1)/2) - l1;
        var s1   = l1>0 ? arr1[l1-1] : Number.NEGATIVE_INFINITY;
        var s2   = l2>0 ? arr2[l2-1] : Number.NEGATIVE_INFINITY;
        var b1   = l1<arr1.length ? arr1[l1] : Number.POSITIVE_INFINITY;
        var b2   = l2<arr2.length ? arr2[l2] : Number.POSITIVE_INFINITY;

        var left  = s1 <= b2;
        var right = b1 >= s2;

        if (left && right) {
            if (needTwo) {
                return (Math.max(s1, s2) + Math.min(b1, b2)) / 2;
            } else {
                return Math.max(s1, s2);
            }
        } else {
            var half = Math.floor((arr1.length+1) / (2*count));
            if (half === 0) {
                half = 1;
            }
            half *= left ? 1 : -1;
            l1   += half;
        }
    } while (true);
};