/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    if(n){
        n = (n >>> 16) | (n << 16);
        n = ((n & 0xff00ff00) >>> 8) | ((n & 0x00ff00ff) << 8);
        n = ((n & 0xf0f0f0f0) >>> 4) | ((n & 0x0f0f0f0f) << 4);
        n = ((n & 0xcccccccc) >>> 2) | ((n & 0x33333333) << 2);
        n = ((n & 0xaaaaaaaa) >>> 1) | ((n & 0x55555555) << 1);
        //abcdefgh -> efghabcd -> ghefcdab -> hgfedcba
        n = n >>>0; //for js...
    }
    return n;
};

/*
* 0000000000000000000001110000111010101
*
* */
console.log(reverseBits(12));
console.log(reverseBits(805306368));
console.log(reverseBits(1));
console.log(reverseBits(4294967295));
console.log(reverseBits(43261596));