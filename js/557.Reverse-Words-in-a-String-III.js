/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var l = str.length;
    var wrd = false;
    var wordStr = '';
    var revStr = '';

    for(var i=0; i<l; i++){
        var c = str.charAt(i);
        if(c!=' '){
            if(!wrd)
                wrd = true;
            wordStr = c + wordStr;
        }else{
            if(wrd){
                wrd = false;
                revStr += ' ' + wordStr;
                wordStr = '';
            }
        }
    }
    if(wrd){
        revStr += ' ' + wordStr;
    }
    if(revStr.length)
        revStr = revStr.substring(1);
    return revStr;
    //return str.split(/\s+/).map(function (s) { return s.split('').reverse().join(''); }).join(' ');
};
