//6:55pm


/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function(S, K) {
    if(S!=null && K!=null){
         var arr = [];
         var l = S.length;
         var nlen = 0;
         for(var i=0; i< l; i++){
             var ch = S.charAt(i);
             if(isFinite(ch)){
                 var ctimes = parseInt(ch);
                 nlen = ctimes*nlen;
             }else{
                 nlen++;
             }
         }
         var kidx = K-1;
         var exitNxt = false;
        for(var i=l-1; i >= 0; i--) {
            var ch = S.charAt(i);
            if(isFinite(ch)){
                var ctimes = parseInt(ch);
                nlen = nlen/ctimes;
                kidx = kidx % nlen;
                if(kidx == nlen){
                    exitNxt = true;
                }
            }else{
                nlen--;
                if(exitNxt || kidx == nlen){
                    return ch;
                }
            }
        }

    }
};
/*
* leet2code3ghg
* leet //oldL = [4,4], newL = [8,4]
* leetleet
* leetleetcode //oldL = [12,8], newL = [36,8]
* leetleetcodeleetleetcodeleetleetcodeghg //oldL = [4,4], newL = [8,4]
* */
console.log(decodeAtIndex("leet2code3", 10));
console.log(decodeAtIndex("leet2code3", 22));
console.log(decodeAtIndex("ha22", 5));
console.log(decodeAtIndex("a23", 6));
console.log(decodeAtIndex("y959q969u3hb22odq595",222280369));