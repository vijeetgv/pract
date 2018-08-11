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
            wordStr += c;
        }else{
            if(wrd){
                wrd = false;
                revStr = wordStr + ' ' + revStr;
                wordStr = '';
            }
        }
    }
    if(wrd){
        revStr = wordStr + ' ' + revStr;
    }
    if(revStr.length)
        revStr = revStr.substring(0, revStr.length-1);
    return revStr;
    //return str.trim().split(/\s+/).reverse().join(' ');
};