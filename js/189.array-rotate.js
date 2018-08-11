/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = function (nums, i,j) {
    var t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
};
var rotate = function(nums, k, l) {
    if(l==null)
        l = nums.length;
    if(k >= l){
        k = k % l;
    }
    if(k==0) return;

    var d = 0;
    var dlim = k;
    var dlimCons = false;
    var lastSeq = l%k;
    for(var i=k; i<l; i++){
        if(!dlimCons && (l-i)==lastSeq){
            dlim = lastSeq;
            dlimCons = true;
        }
        swap(nums, i, d);
        d++;
        if(d == dlim){
            d = 0;
            if(dlimCons && k>dlim){
                //move elems with indexes dlim...k-1 to start, ie 'rotate' them again by (k-dlim) amount assuming the new array from 0 up to length k
                rotate(nums, k-dlim, k);
            }

        }
    }
};


var n = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
rotate(n, 4);
console.log(n);
//console.log(nums2);

/*

* 0,1,2,3,4,5,6,7,8,9,10,11,12,13
* 4,5,6,7,8,9,10,11,12,13,0,1,2,3
* 12,13,10,11,0,1,2,3,4,5,6,7,8,9
* 9,10,11,0,1,2,3,4,5,6,7,8,12,13
* 12,13,11,0,1,2,3,4,5,6,7,8,9,10
* 12,13,11,0,1,2,3,4,5,6,7,8,9,10
* * */