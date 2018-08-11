/**
 * @param {string[]} strs
 * @return {string}
 */
var Trie = function () {
    this.children = {};
    this.isEnd = false;
};

Trie.prototype.insert = function (str) {
    if(str && str.length){
        var curr = this;
        for(var i=0; i<str.length;i++){
            var ch = str.charAt(i);
            var m = curr.children[ch];
            if(m==null){
                m = new Trie();
                curr.children[ch] = m;
            }
            curr = m;
        }
        curr.isEnd = true;
    }
};

Trie.prototype.findLongestCommonPrefix = function () {
    var curr = this;
    var pref = '';
    var ckeys = Object.keys(curr.children);
    while(ckeys.length == 1 && !curr.isEnd){
        pref += ckeys[0];
        curr = curr.children[ckeys[0]];
        ckeys = Object.keys(curr.children);
    }
    return pref;
};

var longestCommonPrefix = function(strs) {
    var pref = '';
    if(strs){
        var trieRoot = new Trie();
        for(var i=0; i<strs.length; i++){
            if(strs[i].length)
                trieRoot.insert(strs[i]);
            else {
                return '';
            }
        }
        pref = trieRoot.findLongestCommonPrefix();
    }
    return pref;
};