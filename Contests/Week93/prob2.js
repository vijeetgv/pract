//12:37am
// 2:55
//3:17

/**
 * @param {number} N
 * @return {boolean}
 */
var getNumArr = function (N) {
    var arr = [];
    while (N){
        arr.unshift(N%10);
        N = Math.floor(N/10)
    }
    return arr;
};
var reorderedPowerOf2 = function(N) {
    var narr = getNumArr(N);
    var l = narr.length;

    // if it has l number of digits, it'd be in between 10^(l-1) to 10^l (exclusive). So let's find powers of 2 that fall in that range
    // 10^(l-1) <= 2^x < 10^l
    // l-1 <= x*log10(2) < l
    // Math.ceil((l-1)/log10(2)) <= x <= Math.floor(l/log10(2))
    var log10_2 = Math.log10(2);
    var stpo2 = Math.ceil((l-1)/log10_2);
    var enpo2 = Math.floor(l/log10_2);

    for(var i=stpo2; i<=enpo2; i++){
        var po2 = getNumArr(Math.pow(2, i));
        if(po2.length && po2.length == l){
            for(var j=0; j < l; j++){
                var ni = po2.indexOf(narr[j]);
                if(ni == -1){
                    break;
                }else{
                    po2[ni] = 'D'; //marking that character has been found & we'd like to check for duplicates
                }
            }
            if(j==po2.length){
                return true;
            }
        }
    }
    return false;
};
console.log('1: ' + reorderedPowerOf2(16));
console.log('10: ' + reorderedPowerOf2(10));
console.log('16: ' + reorderedPowerOf2(16));
console.log('24: ' + reorderedPowerOf2(24));
console.log('46: ' + reorderedPowerOf2(46));