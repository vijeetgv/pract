/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var hw = 0;
    if(n){
        //var numBinDigits = (Math.ceil(Math.log(n)/Math.log(2)) + ((n % 2)?0:1))  ;
        var t = n;
        while(t!=0){
            hw += t & 1;
            t = t >>> 1;
        }
    }
    return hw;
};
console.log(hammingWeight(1));
console.log(hammingWeight(11));
console.log(hammingWeight(128));
//11111111111111111111111111111111
console.log(hammingWeight(4294967295));