/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if(b == 0) return a;
    var carry = (a & b) << 1;
    var s = a ^ b;
    return getSum(s, carry);
};