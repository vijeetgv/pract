function permutations(str) {
    var res = [];
    if(str && str.length){
        if(str.length == 1){
            res.push(str);
        }else if(str.length>1){
            var subStr = str.substring(1);
            var subperm = permutations(subStr);
            var c = str.charAt(0);
            var nc = subStr.indexOf(c) == -1;
            for(var i=0; i<subperm.length; i++){
                var l = subperm[i].length;
                for(var j=0;j<l+1; j++){
                    if(nc || !(subperm[i].charAt(j) == c || ((j< l-1) && subperm[i].charAt(j+1) == c)))
                        res.push(subperm[i].substring(0,j) + c + subperm[i].substring(j));
                }
            }
        }
    }
    return res;
}
// run your function through some test cases here
// remember: debugging is half the battle!
var reslist = permutations('test');
console.log(reslist);
console.log(reslist.length);