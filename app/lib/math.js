/**
 * Created by thomasmichelet on 11/05/2016.
 */
var add = function(a,b) {
    return a + b;
}

var divide = function(a,b) {
    if ( b > 0 ) return a/b;
    else throw(new Error('Divide by 0'));
}

module.exports = {
    add: add,
    divide: divide
}