/**
 * @param {number} n
 * @return {boolean}
 */
var sumOfSquaresOfDigits = function (n) {
    var s = 0;
    while(n > 0){
        var d = n % 10;
        s += d*d;
        n = Math.floor(n/10);
    }
    return s;
};

var isHappy = function(n) {
    if(n!=null){
        var s = n;
        while (s>9){
            s = sumOfSquaresOfDigits(s);
        };
        return s == 1 || s == 7;
    }
    return false;
};

