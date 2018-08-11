//3:35pm
//4:04pm
/* this assumes arr isn't null & i < j & arr.length > j */
var swapNresort = function (arr, i, j) {
    if(i<j){
        var t = arr[j];
        for(var k = j; k > i; k--){
            arr[k] = arr[k-1];
        }
        arr[i] = t;
    }
};

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

var advantageCount = function(A, B) {
    if(A!=null && B!=null){
        A = A.sort(function (a, b) { return a-b; }); //sorting because it'd be better to take the smallest number bigger than B[i]
        for(var i=0; i< A.length; i++){
            if(A[i] <= B[i]){
                for(var j=i+1; j< A.length; j++){
                    if(A[j] > B[i]){
                        swapNresort(A, i, j);
                        break;
                    }
                }
            }
        }
    }
    return A;
};
console.log(advantageCount([12,24,8,32], [13,25,32,11]));