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
    if(piles!=null && H!=null){
        var max = 0;
        for(var i=0; i< piles.length; i++){
            if(max < piles[i])
                max = piles[i];
        }
        var hi = max;
        var lo = 1;
        while(lo < hi){
            var mi = Math.floor((lo+hi)/2);
            if(possible(piles, H, mi)){
                hi = mi;
            }else{
                lo = mi+1;
            }

        }
        return lo;
    }
};

var possible = function (piles, H, k) {
    var hrs = 0;
    for(var i=0; i< piles.length; i++){
        hrs += Math.ceil(piles[i]/k);
    }
    return hrs <= H;
};