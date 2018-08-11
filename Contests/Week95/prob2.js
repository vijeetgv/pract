//6:32pm
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    if(piles){
        var players = {alex: 0, lee: 0};
        var start = 0,end = piles.length-1;
        var choosePile = function (usr) {
            if(piles[start] > piles[end]){
                players[usr] += piles[start];
                start++;
            }else{
                players[usr] += piles[end];
                end--;
            }
        };
        while(start < end){
            choosePile('alex');
            choosePile('lee');
        }
        return players.alex > players.lee;
    }
};

// console.log(stoneGame([5,3,4,5]));
console.log(stoneGame([3,2,10,4]));