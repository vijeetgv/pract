var BinaryHeapStrategy = function BinaryHeapStrategy(options) {
    var ref;
    this.comparator = (options != null ? options.comparator : void 0) || function(a, b) {
        return a - b;
    };
    this.length = 0;
    this.data = [];
    this._heapify();
};

BinaryHeapStrategy.prototype._heapify = function() {
    var i, j, ref;
    if (this.data.length > 0) {
        for (i = j = 1, ref = this.data.length; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
            this._bubbleUp(i);
        }
    }
    return void 0;
};

BinaryHeapStrategy.prototype.queue = function(value) {
    this.data.push(value);
    this._bubbleUp(this.data.length - 1);
    return void 0;
};

BinaryHeapStrategy.prototype.dequeue = function() {
    var last, ret;
    ret = this.data[0];
    last = this.data.pop();
    if (this.data.length > 0) {
        this.data[0] = last;
        this._bubbleDown(0);
    }
    return ret;
};

BinaryHeapStrategy.prototype.peek = function() {
    return this.data[0];
};

BinaryHeapStrategy.prototype.clear = function() {
    this.length = 0;
    this.data.length = 0;
    return void 0;
};

BinaryHeapStrategy.prototype._bubbleUp = function(pos) {
    var parent, x;
    while (pos > 0) {
        parent = (pos - 1) >>> 1;
        if (this.comparator(this.data[pos], this.data[parent]) < 0) {
            x = this.data[parent];
            this.data[parent] = this.data[pos];
            this.data[pos] = x;
            pos = parent;
        } else {
            break;
        }
    }
    return void 0;
};

BinaryHeapStrategy.prototype._bubbleDown = function(pos) {
    var last, left, minIndex, right, x;
    last = this.data.length - 1;
    while (true) {
        left = (pos << 1) + 1;
        right = left + 1;
        minIndex = pos;
        if (left <= last && this.comparator(this.data[left], this.data[minIndex]) < 0) {
            minIndex = left;
        }
        if (right <= last && this.comparator(this.data[right], this.data[minIndex]) < 0) {
            minIndex = right;
        }
        if (minIndex !== pos) {
            x = this.data[minIndex];
            this.data[minIndex] = this.data[pos];
            this.data[pos] = x;
            pos = minIndex;
        } else {
            break;
        }
    }
    return void 0;
};


var PriorityQueue = (function() {
    var PriorityQueue = function (options) {
        var ref;
        /*if ((options != null ? options.strategy : void 0) == null) {
            throw 'Must pass options.strategy, a strategy';
        }*/
        /*if ((options != null ? options.comparator : void 0) == null) {
            throw 'Must pass options.comparator, a comparator';
        }*/
        this.priv = new BinaryHeapStrategy(options);
        this.length = (options != null ? (ref = options.initialValues) != null ? ref.length : void 0 : void 0) || 0;
    };

    PriorityQueue.prototype.queue = function(value) {
        this.length++;
        this.priv.queue(value);
        return void 0;
    };

    PriorityQueue.prototype.dequeue = function() {
        if (!this.length) {
            throw 'Empty queue';
        }
        this.length--;
        return this.priv.dequeue();
    };

    PriorityQueue.prototype.peek = function(value) {
        if (!this.length) {
            throw 'Empty queue';
        }
        return this.priv.peek();
    };

    PriorityQueue.prototype.clear = function() {
        this.length = 0;
        return this.priv.clear();
    };

    return PriorityQueue;

})();

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    var minStops = -1;
    if(target!=null && startFuel!=null && stations!=null){
        var nowpos=startFuel;
        var counter=0,p=0;
        var pq = new PriorityQueue();
        while(1){
            while(p < stations.length && stations[p][0]<=nowpos){
                pq.queue(stations[p][1]);
                p++;
            }
            if(nowpos>=target) return counter;
            if(!pq.length) return -1;
            nowpos += pq.peek();
            pq.dequeue();
            counter++;
        }
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