function getMaxProfit(stockPrices) {

    // Calculate the max profit
    var maxDiff = 0;
    var l = stockPrices.length;
    if (l && l > 1) {
        var minPrice = stockPrices[0];
        maxDiff = Math.abs(stockPrices[1] - minPrice);
        for (var i = 1; i < l; i++) {
            var cp = stockPrices[i];
            var pp = Math.abs(cp - minPrice);

            if (pp > maxDiff) {
                maxDiff = pp;
            }

            if (cp < minPrice) {
                minPrice = cp;
            }
        }
    } else {
        throw 'Error';
    }
    return maxDiff;

}

function getMinProfit(stockPrices) {

    // Calculate the max profit
    var maxDiff = Number.MAX_VALUE;
    var l = stockPrices.length;
    if (l && l > 1) {
        var maxPrice = stockPrices[0];
        maxDiff = Math.abs(stockPrices[1] - maxPrice);
        for (var i = 1; i < l; i++) {
            var cp = stockPrices[i];
            var pp = Math.abs(cp - maxPrice);

            if (pp < maxDiff) {
                maxDiff = pp;
            }

            if (cp > maxPrice) {
                maxPrice = cp;
            }
        }
    } else {
        throw 'Error';
    }
    return maxDiff;

}

console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));
console.log(getMaxProfit([1, 70, 5, 81, 1, 11, 9]));
console.log(getMinProfit([10, 7, 5, 8, 11, 9]));
console.log(getMinProfit([1, 70, 5, 81, 1, 11, 9]));