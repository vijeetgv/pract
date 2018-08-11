/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    if(list1!=null && list2!=null){
        var smallerLst, largerLst;
        if(list1.length < list2.length){
            smallerLst = list1;
            largerLst = list2;
        }else{
            smallerLst = list2;
            largerLst = list1;
        }
        var res = [];
        var minSum = Number.MAX_VALUE;
        var largeLstIdxMap = new Map();
        for(var i=0; i<largerLst.length;i++){
            largeLstIdxMap.set(largerLst[i], i);
        }
        for(var i=0; i<smallerLst.length;i++){
            var lIdx = largeLstIdxMap.get(smallerLst[i]);
            if(lIdx!=null){
                var sum = lIdx+i;
                var psh = minSum == sum;
                if(!psh && minSum>sum){
                    minSum = sum;
                    res = [];
                    psh = true;
                }
                if(psh){
                    res.push(smallerLst[i]);
                }
            }
        }
        return res;
    }
    return null;
};