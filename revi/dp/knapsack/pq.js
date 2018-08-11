var BinaryHeapStrategy = (function() {
            function BinaryHeapStrategy(options) {
                var ref;
                this.comparator = (options != null ? options.comparator : void 0) || function(a, b) {
                    return a - b;
                };
                this.length = 0;
                this.data = ((ref = options.initialValues) != null ? ref.slice(0) : void 0) || [];
                this._heapify();
            }

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

            return BinaryHeapStrategy;

});


var PriorityQueue = (function() {
    function PriorityQueue(options) {
        var ref;
        if ((options != null ? options.strategy : void 0) == null) {
            throw 'Must pass options.strategy, a strategy';
        }
        if ((options != null ? options.comparator : void 0) == null) {
            throw 'Must pass options.comparator, a comparator';
        }
        this.priv = new BinaryHeapStrategy(options);
        this.length = (options != null ? (ref = options.initialValues) != null ? ref.length : void 0 : void 0) || 0;
    }

    PriorityQueue.prototype.queue = function(value) {
        this.length++;
        this.priv.queue(value);
        return void 0;
    };

    PriorityQueue.prototype.dequeue = function(value) {
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