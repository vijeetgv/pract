//3:18pm
//3:24pm
//3:28pm
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = 0;
    if(prices){
        var minPrice = prices[0];
        //maxProfit = prices[1]-minPrice;
        for(var i=1; i<prices.length; i++){
            var cp = prices[i];
            if(minPrice > cp)
                minPrice = cp;
            else{
                var cprofit = cp - minPrice;
                if(cprofit > maxProfit){
                    maxProfit = cprofit;
                }
            }
        }
    }
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));