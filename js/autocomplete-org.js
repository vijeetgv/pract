var Trie = function() {
    this.children = {};
    this.times = 0;
    this.isEnd = false;
};

Trie.prototype.insert = function(sentence, times) {
    var l = sentence.length;
    var curr = this;
    for(var i=0; i<l; i++){
        var k = sentence.charAt(i);
        if(!curr.children[k]){
            curr.children[k] = new Trie();
        }
        curr = curr.children[k];
    }
    curr.isEnd = true;
    curr.times += times;
};


Trie.prototype.searchChar = function(lastParent, ch) {
    var curr = null;
    if(lastParent){
        curr = lastParent;
        curr = curr.children[ch];
    }
    return curr;
};

Trie.prototype.printChildren = function(lastParent, prefixStr) {
    var ret = [];
    if(lastParent && prefixStr!=null && lastParent.children){
        for(var chiCh in lastParent.children){
            var nxtChild = lastParent.children[chiCh];
            var childStrs = (this.printChildren(nxtChild, chiCh));
            for(var j=0; j<childStrs.length; j++){
                ret.push([(prefixStr + childStrs[j][0]), childStrs[j][1]]);
            }
        }
        if(lastParent.isEnd){
            ret.push([prefixStr,lastParent.times]);
        }
    }
    return ret;
};


var AutocompleteSystem = function(sentences, times) {
    this.store = new Trie();
    for(var i=0; i< sentences.length; i++){
        this.store.insert(sentences[i], times[i]);
    }
    this.lastParent = this.store;
    this.currStr = '';
};

AutocompleteSystem.prototype.input = function(c) {
    var results = [];
    if(c != '#'){
        this.lastParent = this.store.searchChar(this.lastParent, c);
        this.currStr += c;
        results = this.store.printChildren(this.lastParent, this.currStr);
        results.sort(function (a, b) {
            if(a[1] == b[1]){
                return (a[0]<b[0])?-1:((a[0]>b[0])?1:0);
            }else{
                return b[1]-a[1];
            }
        });
        if(results.length > 3)
            results = results.slice(0,3);
        results = results.map(function (el) { return el[0] });
    }else{
        this.lastParent = this.store;
        this.store.insert(this.currStr, 1);
        this.currStr = '';
    }
    return results;
};