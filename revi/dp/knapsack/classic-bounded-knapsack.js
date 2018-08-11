
var knapsack = function(N, W, wt, val){
    if(N==0 || W == 0){
        return 0;
    }
    //let's assume if we pick k items and their wt is <= W & it represents the max value we can have by picking k-1 items.
    // Now we'll consider picking kth item only if its total wt wt[N-1] <= W
    //And then we'll check if the value of that whole thing is more than

    var maxVal = 0;

    if(wt[N-1] > W){ //if Nth item has wt more than W then exclude it
        return knapsack(N-1, W, wt, val);
    }
    // Return the maximum of two cases:
    // (1) nth item included
    // (2) not included
    return Math.max(val[N-1] + knapsack(N-1, W-wt[N-1], wt, val), knapsack(N-1, W, wt, val));
};

var knapsackBtmUp = function (N, W, wt, val) {
    var K = [[]]; //to be used as a 2D array
    for(var i=0; i<= N; i++){
        if(K.length == i){
            K.push([]);
        }
        for(var w=0; w<=W; w++){
            if(i==0 || w==0)
                K[i][w] = 0;
            else if(wt[i-1] > w){ //if wt of ith element is more than w
                K[i].push(K[i-1][w]);
            }else{
                K[i].push(Math.max(K[i-1][w], val[i-1] + K[i-1][w-wt[i-1]]));
            }
        }
    }
    return K[N][W];
};