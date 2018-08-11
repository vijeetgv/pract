/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    var n = N;
    var last = 0;
    var st = -1, end = -1, maxDiff = 0;
    var i = 0;
    var stCont1s = null;
    while(n>0){
        var curr = n%2;
        if(curr==1){
            if(last == 0){
                end = i;
                if(st == -1)
                    st = i;
            }else if(stCont1s==null || stCont1s){
                end = i+1;
                st = i;
                stCont1s = true;
            }

        }else {
            if(stCont1s!=null){
                stCont1s = false;
            }
            if(last==1){
                st = i-1;
            }
        }

        var currDiff = end - st;
        if(currDiff > maxDiff){
            maxDiff = currDiff;
        }
        n = Math.floor(n/2);
        i++;
        last = curr;
    }

    return maxDiff;
};

console.log("result: " + binaryGap(187));
