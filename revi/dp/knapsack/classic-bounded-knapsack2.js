
var maxValResult = function(W, wt, val){
    var l = wt.length+1;
    var maxVals = new Array(l);
    for(var i=0; i<l; i++){
        maxVals[i] = new Array(l);
    }
    
    for(var i=0; i<l; i++){
        for(var w=0; w < l; w++){
            if(w==0 || i == 0)
                maxVals[i][w] = 0;
            else if(wt[i-1] <= w){
                maxVals[i][w] = Math.max(maxVals[i-1][w-wt[i-1]]+val[i], maxVals[i-1][w])
            }else{
                maxVals[i][w] = maxVals[i-1][w];
            }
        }
    }
    return maxVals[n][W];
}
