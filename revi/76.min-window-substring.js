/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var ret = '';
    if(s!=null && t!=null){
        var tmap = {};

        for(var i=0; i< t.length; i++){
            if(tmap[t.charAt(i)])
                tmap[t.charAt(i)]++;
            else
                tmap[t.charAt(i)] = 1;
        }
        var begin=0, end=0, head=0, d = Number.MAX_VALUE, rem2match = t.length;
        while (end<s.length){
            if(tmap[s.charAt(end)]>0){
                tmap[s.charAt(end)]--;
                rem2match--;
            }
            if(rem2match==0){
                if((end-begin)<d){
                    d = end-begin;
                    head = begin;
                }
                begin++;
                rem2match++;
                var c = s.charAt(begin);
                if(tmap[c]==0){
                    tmap[c]++;
                }
            }
            end++;
        }
        if(d<Number.MAX_VALUE)
            ret = s.substring(head, d);

    }
    return ret;
};