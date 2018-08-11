/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.data = null;
    this.children = {};
    this.isEnd = false;
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    if(key!=null && key.length){
        var curr = this;
        for(var i=0; i< key.length; i++){
            var c = key.charAt(i);
            if(curr.children[c]==null){
                curr.children[c] = new MapSum();
            }
            curr = curr.children[c];
        }
        curr.isEnd = true;
        curr.data = val;
    }
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    var ret = 0;
    if(prefix!=null && prefix.length) {
        var curr = this;
        for (var i = 0; i < prefix.length; i++) {
            var c = prefix.charAt(i);
            if(curr.children[c]!=null){
                curr = curr.children[c];
            }else{
                return 0; //no value matches the prefix
            }
        }
        if(curr){
            ret += this.sumChildren(curr);
        }
    }
    return ret;
};

MapSum.prototype.sumChildren = function (root) {
    var ret = 0;
    if(root){
        if(root.isEnd){
            ret += root.data;
        }
        for(var ch in root.children){
            var child = root.children[ch];
            ret += this.sumChildren(child);
        }
    }
    return ret;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */