//11:20pm
/**
 * m[h]  ---> h hrs
 * m[0] = 0
 * m[h(i)] = max(vi - )
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    var minSpeed;
    if(piles!=null && H!=null){
        var l = piles.length;

        var max = 0;
        for(var i=0; i< l; i++){
            if(piles[i] > max)
                max = piles[i];
        }
        if(H == l)
            minSpeed = max;
        else {
            var hi = max;
            var lo = 1;
            while(lo < hi){
                var mi = Math.floor((lo+hi)/2);
                if(possible2Finish(piles, H, mi)){
                    hi = mi;
                }else{
                    lo = mi+1;
                }
            }
            minSpeed = lo;
        }

    }
    return minSpeed;
};

var possible2Finish = function (piles, H, sp) {
    var possible = true;
    var h = 0;
    for(var i=0; i < piles.length; i++){
        h += Math.ceil(piles[i]/sp);
        if(h > H){
            possible = false;
            break;
        }
    }
    return possible;
};

