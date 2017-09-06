// es5

function add(a, b){
    var c = Array.prototype.slice.call(arguments, 2)
    console.log(c.length)
    return a + b;
}


// es6

function add(a, b, ...c){
    console.log(c.length)
    return a+b;
}