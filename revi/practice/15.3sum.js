
var combinationsHelper = function (l, start, k, tmp, result, Kmax) {
    if(k==0){
        result.push(tmp.slice());
    }else {
        for (var i=start; i < l - k + 1; i++ ){
            tmp[Kmax-k] = i;
            combinationsHelper(l, i+1, k-1, tmp, result, Kmax);
        }
    }
};

var combinations = function (l, k) {
    var result = [];
    if(l && k>=0 && l > k){
        var tmp = new Array(k);
        combinationsHelper(l, 0, k, tmp, result, k);
    }
    return result;
};

var arrContains = function (result, s3) {
    if(!result.length) return false;
    if(s3.length){
        for(var i=0; i< result.length; i++){
            var contains = true;
            var rsmap = {};
            for(var j=0; j<result[i].length; j++){
                if(rsmap[result[i][j]]){
                    rsmap[result[i][j]]++;
                }else
                    rsmap[result[i][j]] = 1;
            }

            for(var j=0; j<s3.length; j++){
                if(rsmap[s3[j]]){
                    rsmap[s3[j]]--;
                }else {
                    contains = false;
                    break;
                }
            }
            if(contains){
                return true;
            }
        }
        return false;
    }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];

    if(nums!=null && nums.length){
        var combs1 = combinations(nums.length, 2);
        var sums2map = new Map();

        for (var i=0; i<combs1.length; i++){
            var c = combs1[i];

            var s = nums[c[0]] + nums[c[1]];
            if(sums2map.has(s))
                sums2map.get(s).push(c);
            else{
                sums2map.set(s,[c]);
            }
        }
        for(var i=0; i<nums.length; i++){
            var sc = sums2map.get(0-nums[i]);
            if(sc!=null){
                for(var j=0; j<sc.length; j++){
                    if(sc[j].indexOf(i) == -1){
                        var s3 = [nums[i]].concat(sc[j].map(function (v) { return nums[v]; }));
                        if(!arrContains(result, s3)){
                            result.push(s3);
                        }
                    }
                }
            }
        }
    }
    return result;
};


// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([3,0,-2,-1,1,2]));
// console.log(threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]));
console.log(threeSum([-13,11,11,0,-5,-14,12,-11,-11,-14,-3,0,-3,12,-1,-9,-5,-13,9,-7,-2,9,-1,4,-6,-13,-7,10,10,9,7,13,5,4,-2,7,5,-13,11,10,-12,-14,-5,-8,13,2,-2,-14,4,-8,-6,-13,9,8,6,10,2,6,5,-10,0,-11,-12,12,8,-7,-4,-9,-13,-7,8,12,-14,10,-10,14,-3,3,-15,-14,3,-14,10,-11,1,1,14,-11,14,4,-6,-1,0,-11,-12,-14,-11,0,14,-9,0,7,-12,1,-6]));
