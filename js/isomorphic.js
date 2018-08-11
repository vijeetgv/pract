/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var res = true;
    if(s!=null && t!=null && (s.length == t.length)){
        var revReplLi = {};
        var replLi = {};
        for(var i=0;i<s.length; i++){
            var sc = s.charAt(i);
            var tc = t.charAt(i);
            if(replLi[sc]!=null || revReplLi[tc]!=null){
                if(replLi[sc] == revReplLi[tc]){
                    res = false;
                    break;
                }
            }else{
                replLi[sc] = i;
                revReplLi[tc] = i;
            }
        }
    }
    return res;
};