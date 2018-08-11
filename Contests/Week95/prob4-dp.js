//6:12pm

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
        // dp[i] max dist it can travel with i stops
        // min i, for dp[i] = target
        //dp[t+1] = max(dp[t+1], dp[t]+s[i][1])

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