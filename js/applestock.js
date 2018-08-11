function getMaxProfit(stockPrices) {
    // Calculate the max profit
    var maxDiff = 0;
    if(stockPrices){
        var minPrice = stockPrices[0];
        maxDiff = stockPrices[1] - minPrice;
        for(var i=1; i<stockPrices.length; i++){
            var cp = stockPrices[i] - minPrice;

            if(cp > maxDiff){
                maxDiff = cp;

            }
            if(stockPrices[i]<minPrice){
                minPrice = stockPrices[i];
            }

        }
    }
    return maxDiff;
}


















// Tests

var desc = 'price goes up then down';
var actual = getMaxProfit([1, 5, 3, 2]);
var expected = 4;
assertEqual(actual, expected, desc);

desc = 'price goes down then up';
actual = getMaxProfit([7, 2, 8, 9]);
expected = 7;
assertEqual(actual, expected, desc);

desc = 'price goes up all day';
actual = getMaxProfit([1, 6, 7, 9]);
expected = 8;
assertEqual(actual, expected, desc);

desc = 'price goes down all day';
actual = getMaxProfit([9, 7, 4, 1]);
expected = -2;
assertEqual(actual, expected, desc);

desc = 'price stays the same all day';
actual = getMaxProfit([1, 1, 1, 1]);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'error with empty prices';
var emptyArray =  (getMaxProfit([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one price';
var onePrice =  (getMaxProfit([1]));
assertThrowsError(onePrice, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(desc + ' ... PASS');
    } else {
        console.log(desc + ' ... FAIL: ' + a + ' != ' + b );
    }
}

function assertThrowsError(func, desc) {
    try {
        func();
        console.log(desc + ' ... FAIL');
    } catch (e) {
        console.log(desc + ' ... PASS');
    }
}