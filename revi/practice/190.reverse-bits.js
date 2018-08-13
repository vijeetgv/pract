/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var ans = 0;
    if(n){
        for(var i=0; i<32; i++){
            /*if((n & (1 << i))!=0){
                ans |= (1 << (31-i));
            }*/
            ans = ans * 2 + (n % 2); //faster to do simple way
            n = parseInt(n/2);
        }
        //ans = ans >>>0;
    }
    return ans;
};

/*
* 0000000000000000000001110000111010101
*
* */
console.log(reverseBits(12));
console.log(reverseBits(805306368));
console.log(reverseBits(1));
console.log(reverseBits(4294967295));