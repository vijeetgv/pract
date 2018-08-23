//3:27pm
/*
*
*
* */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var result = 0;
    if(n){
        var i = 1;
        var denominator = 1;
        result++;
        while((n-(2*i-1)) > 0){
            var numerator = 1;
            for(var j=i; j<(2*i); j++){
                numerator *= (n-j);
            }
            denominator *= i;
            result += numerator/denominator;
            i++;
        }
    }
    return result;
};
