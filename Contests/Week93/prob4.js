//4:42pm

//5:07
/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    var minStops = -1;
    if(target!=null && startFuel!=null && stations!=null){
        minStops = 0;
        var currFuel = startFuel;
        var l = stations.length;
        var distTravelled = 0;
        var currDist2nxtStn = 0;
        for(var i = 0; i< l; i++){
            var currDist2nxtnxtStn = (((i+1)<l)?stations[i+1][0]:target) - distTravelled;
            currDist2nxtStn = stations[i][0] - distTravelled;
            if(currFuel < currDist2nxtnxtStn){
                if(currFuel >= currDist2nxtStn){
                    //then stop at next stn
                    currFuel += stations[i][1];
                    minStops++;
                }else{
                    minStops = -1;
                    break;
                }
            }
            currFuel -= currDist2nxtStn;
            distTravelled += currDist2nxtStn;
        }
        currDist2nxtStn = target - distTravelled;
        if(currFuel < currDist2nxtStn)
            minStops = -1;
    }
    return minStops;
};
var target, startFuel, stations;
// target = 1, startFuel = 1, stations = []
// console.log(minRefuelStops(target, startFuel, stations));
// target = 100, startFuel = 1, stations = [[10,100]]
// console.log(minRefuelStops(target, startFuel, stations));
// target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
// console.log(minRefuelStops(target, startFuel, stations));
// target = 100, startFuel = 25, stations = [[25,25],[50,25],[75,25]]
// console.log(minRefuelStops(target, startFuel, stations));
// target = 100, startFuel = 50, stations = [[25,30]]
// console.log(minRefuelStops(target, startFuel, stations));
target = 100, startFuel = 50, stations = [[25,50],[50,25]]
console.log(minRefuelStops(target, startFuel, stations));