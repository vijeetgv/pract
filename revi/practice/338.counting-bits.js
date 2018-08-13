/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var nbits = [];
    if(num!=null && n >= 0){
        nbits = [0];
        for(var i=1; i<=num;i++){
            nbits.push(nbits[i>>1]+(i & 1))
        }
    }
    return nbits;
};
