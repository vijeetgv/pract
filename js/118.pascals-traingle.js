/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var res = [];
    if(rowIndex!=null){
        var pasRes = [1];
        for(var i=0; i<rowIndex;i++){
            for(var j=0; j<pasRes.length-1; j++){
                pasRes[j] += pasRes[j+1];
            }
            pasRes.unshift(1);
        }
        res = pasRes;
    }
    return res;
};

console.log(getRow(5));
/*
* 1,2,1
* 0,1,2
* */