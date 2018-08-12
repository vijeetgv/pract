/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = [];
    if(n < 1 || k < 1 || n < k)
        return result;
    var arr = [];
    for(var i=0; i<n; i++)
        arr.push(i+1);
    var tmp = new Array(k);
    combinations(arr,k, 0, tmp, n, k, result);

    return result;
};

var combinations = function(arr, k, start, comb, lmax, kmax, results) {
    if(k==0){
        results.push(comb.slice());
    }else{
        for(var i=start; i<(lmax-k+1); i++){
            comb[kmax-k] = arr[i];
            combinations(arr, k-1, i+1, comb, lmax, kmax, results);
        }
    }
};

var lst = combine(9,3);
lst.forEach(function (value, index) {
    console.log(value);
});
