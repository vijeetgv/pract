//start 11:37pm

var Trie = function () {
    this.children = {};
    this.isEnd = false;
}

Trie.prototype.insert = function (rootWord) {
    if(rootWord && rootWord.length){
        var curr = this;
        var l = rootWord.length;
        for (var i = 0; i< l; i++){
            var c = rootWord.charAt(i);
            if(curr.children[c]==null){
                curr.children[c] = new Trie();
            }
            curr = curr.children[c];
        }
        curr.isEnd = true;
    }
};

/*for searching a prefix for a word in the sentence*/
Trie.prototype.search = function (word) {
    if(word && word.length){
        var curr = this;
        var l = word.length;
        var i;
        var prefix = '';
        for (i = 0; i< l; i++) {
            var c = word.charAt(i);
            curr = curr.children[c];
            if(curr){
                prefix += c;
                if(curr.isEnd){
                    break;
                }
            }else
                break;
        }
        if(curr && curr.isEnd){
            return prefix;
        }
    }
    return null;
};

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    var newSentence;
    if(dict && sentence){
        this.tStore = new Trie();
        for(var i=0; i< dict.length; i++){
            this.tStore.insert(dict[i]);
        }
        newSentence = sentence.replace(/\w+/g, function (match) {
            var prefixFound = this.tStore.search(match);
            if(prefixFound)
                return prefixFound;
            else
                return match;
        });
    }
    return newSentence;
};

console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"));