var PI = Math.PI;

module.exports.area = function(r) { return PI * r * r };

exports.circumference = function(r) { return 2 * PI * r };


console.log(exports === module.exports)
