/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    var res;
    if(nums1!=null && nums2!=null){
        var l1 = nums1.length;
        var l2 = nums2.length;
        var l = l1+l2;
        if(l){
            var mergedArr = [];
            if(!l2){
                mergedArr = nums1;
            }else if(!l1){
                mergedArr = nums2;
            }else{
                var i=0,j=0;
                while(i<l1 && j < l2){
                    if(nums1[i] < nums2[j]){
                        mergedArr.push(nums1[i]);
                        i++;
                    }else{
                        mergedArr.push(nums2[j]);
                        j++;
                    }
                }
                if(i<l1){
                    for(;i<l1;i++)
                        mergedArr.push(nums1[i]);
                }else if(j<l2){
                    for(;j<l2;j++)
                        mergedArr.push(nums2[j]);
                }
            }
            if(l%2==0)
                res = (mergedArr[l/2-1] + mergedArr[l/2])/2;
            else
                res = mergedArr[(l-1)/2];
        }
    }
    return res;
};