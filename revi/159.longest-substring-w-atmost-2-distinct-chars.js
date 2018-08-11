/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    var ret = 0;
    if(s!=null){
        var l = s.length;
        if(l < 3)
            ret = l;
        else{
            var matched = {};
            var begin = 0, end = 0, d=0, uniqueCnt = 0, head = 0;
            while(end < l){
                if(!matched[s.charAt(end)]) {
                    if(uniqueCnt == 2){
                        if((end-begin)>d){
                            d = (end-begin);
                            head = begin;
                        }
                        do{
                            matched[s.charAt(begin)]--;
                            begin++;
                        }while(matched[s.charAt(begin-1)]>0);
                        uniqueCnt--;
                    }
                    matched[s.charAt(end)] = 1;
                    uniqueCnt++;
                }else
                    matched[s.charAt(end)]++;
                end++;
            }
            if(uniqueCnt){
                if((end-begin)>d){
                    d = (end-begin);
                    head = begin;
                }
            }

            ret = d;//s.substr(head, d);
        }
    }
    return ret;
};


console.log(lengthOfLongestSubstringTwoDistinct('eceba'));
console.log(lengthOfLongestSubstringTwoDistinct('ccaabbb'));