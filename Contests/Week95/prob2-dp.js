//6:32pm
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    if(piles){
        var players = {alex: 0, lee: 0};
        var start = 0,end = piles.length-1;

        return players.alex > players.lee;
    }
};

// console.log(stoneGame([5,3,4,5]));
console.log(stoneGame([3,2,10,4]));

/*
* Let's assume k number of stones have been collected in k turns of alex (2k piles collected), which are the max number of stones which could've been collected up to k.
* if there are just 2 piles, Alex would take the greater pile, so stones(0) = Math.max(piles[start], piles[end])
* dp(i,j) = Math.max(piles[i] + dp[i+1,j], dp[i,j-1]+piles[j])
* */