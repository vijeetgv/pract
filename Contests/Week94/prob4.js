//11:50am
/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
    var setA = new Set();
    var l = A.length;
    for(var i=0; i< l; i++){
        setA.add(A[i]);
    }
    var maxL = 0;
    var fibL = 0;
    for(var i=0; i<l-1; i++){
        var a1e = A[i];
        fibL = 1;
        for(var j=i+1;j<l; j++ ){
            var a1 = a1e;
            var a2 = A[j];
            fibL = 2;
            var a3 = a1+a2;
            while(setA.has(a3)){
                //pursue further fibo leads
                fibL++;
                a1 = a2;
                a2 = a3;
                a3 = a1 + a2;
            }
            if(fibL > maxL)
                maxL = fibL;
        }
    }
    if(maxL <= 2)
        maxL = 0;
    return maxL;

};

console.log(lenLongestFibSubseq([1,3,5]));
console.log(lenLongestFibSubseq([1,2,3,4,5,6,7,8]));
console.log(lenLongestFibSubseq([1,3,7,11,12,14,18]));
console.log(lenLongestFibSubseq([2,4,7,8,9,10,14,15,18,23,32,50]));//4,14,18,32,50