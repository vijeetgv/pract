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
         var j = 0;
         for(var i=0; i< l; i++){
             var ch = S.charAt(i);
             if(isFinite(ch)){

                 var jl = arr.length;
                 var ctimes = parseInt(ch);
                 if((jl*ctimes)>=K){
                     return arr[(K -1)%jl];//
                 }
                 ctimes--;
                 for(var ct=0; ct < ctimes; ct++)
                     for(var sj = 0; sj < jl; sj++){
                         arr.push(arr[sj]);
                         j++;
                 }
             }else{
                 arr.push(S[i]);
                 j++;
                 if(j==K)
                     return arr[K-1];
             }
         }
    }
};
K
console.log(decodeAtIndex("leet2code3", 10));
console.log(decodeAtIndex("ha22", 5));
console.log(decodeAtIndex("a23", 6));
console.log(decodeAtIndex("y959q969u3hb22odq595",222280369));