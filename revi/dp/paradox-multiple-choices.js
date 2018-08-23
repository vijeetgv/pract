function paradoxMultiplProbs(v, n){
    var pricesets = [];
    var maxi = -1;
    var maxRev = 0;
    var x

    for(var x=0;x<n;x++){
        var rev = 0;
        var p = [];
        rev = p[x] = v[x];
        for(var j=x+1; j<n;j++){
            p[j] = Math.max(p[j-1],v[j]);
            if(p[j] <= v[j])
                rev += p[j];
        }
        for(var j=x-1; j>=0;j--){
            p[j] = Math.min(p[j+1],v[j]);
            if(p[j] <= v[j])
                rev += p[j];
        }
        if(rev > maxRev){
            maxRev = rev;
            maxi = x;
        }
        pricesets.push(p);
    }
    if(maxi > -1){
        return pricesets[maxi];
    }
    return null;
}
