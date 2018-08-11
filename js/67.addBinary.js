/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinDigit = function (a,b,carry) {
    var s = 0;
    if(carry==null)
        carry = 0;
    if(!(a=='1' ^ b=='1')){//either both 1 or both 0
        s = carry;
        carry = a;
    }else { //a=='1' || b=='1'
        if(carry=='1'){
            s = '0';
            carry = '1';
        }else{ //carry = '0'
            s = '1'
        }
    }
    return [s, carry];
};

var addBinary = function(a, b) {
    var la = a.length;
    var lb = b.length;
    if(la < lb){
        return addBinary(b,a);
    }
    var d = la-lb;
    var res = '';
    var carry = 0;
    for(var i=la-1; i>-1;i--){
        var ca = a.charAt(i);
        var cb = i<d?'0':b.charAt(i-d);

        var r = addBinDigit(ca, cb, carry);
        var s = r[0];
        carry = r[1];
        res = s + res;
    }
    if(carry == '1'){
        res = carry+res;
    }
    return res;
};

console.log(addBinary('1010','1011'));