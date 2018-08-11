
var urlStore = {};
var TINY_URL = 'http://tinyurl.com/';
var tul = TINY_URL.length;
var idx=1;
var secret = 'testal';
var getChar = function(chCode){
    if(chCode && chCode >= 0){
        var resolvedCode;
        if(chCode < 26){
            resolvedCode = 65+chCode;
        }else if(chCode < 52){
            resolvedCode = 97+chCode-26;
        }else if(chCode < 62){
            resolvedCode = 48+chCode-52;
        }
        return String.fromCharCode(resolvedCode);
    }
    return null;
};
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    if(longUrl){
        var rotUrl = [];
        var l = longUrl.length;
        for(var i=0; i < l; i++){
            rotUrl.push(String.fromCharCode(((longUrl.charCodeAt(i)+l))))
        }
        rotUrl = rotUrl.join('');

        var hash = '';
        var sl = secret.length;
        for(var i=0; i < 6; i++){
            var sidx = Math.floor((idx*Math.random()*(i+l))%sl);
            var sch = secret.charCodeAt(sidx)+36;
            //sch.kickAss, practice AS MUCH AS YOU CAN BABY!
            var hc = idx*sch*Math.random();
            var hch = rotUrl[Math.floor(hc%l)];
            hash += getChar((hch.charCodeAt(0)*hc)%62);
        }
        urlStore[hash] = rotUrl;
        idx++;
        return hash;
    }
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    if(shortUrl && shortUrl.length > 0){
        var rotatedStr = urlStore[shortUrl];
        if(rotatedStr!=null){
            var newArr = [];
            var l = rotatedStr.length;
            for(var i=0; i< l; i++){
                newArr[i] = String.fromCharCode(rotatedStr.charCodeAt(i)-l);
            }
            shortUrl = newArr.join('');
        }

    }
    return shortUrl;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
console.log(decode(encode('https://leetcode.com/problems/design-tinyurl')))


