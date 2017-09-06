// es5 way
function add(a, b){
    if(a === undefined){
        a = 0;
    }
    if(b === undefined){
        b = 0;
    }
    return a + b;
}


// es6 way
function add(a=10, b=20){
    return a+b;
}

// execute
add()