//6:15pm
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(coins!=null && coins.length > 0 && amount!=null){
        var max = amount+1;
        var dp = new Array(max).fill(max);
        dp[0] = 0;
        for(var i=1; i< max; i++){
            for(var j=0; j < coins.length; j++){
                if(coins[j] <= i){
                    dp[i] = Math.min(dp[i], dp[i-coins[j]]+1);
                }
            }
        }
        if(dp[amount] <= amount){
            return dp[amount];
        }
    }
    return -1;
};

console.log(coinChange([186,419,83,408], 6249));
// console.log(coinChange([1,2,5,10], 18));
// console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([2], 3));