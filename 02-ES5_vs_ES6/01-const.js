//es5
var MathObject = new Object();
Object.defineProperty(typeof MathObject === "object" ? MathObject: window, "PI", {
    value: 3.14,
    enumerable: true,
    writable: false,
    configurable: false
})

console.log(MathObject.PI)
MathObject.PI = 55;
console.log(MathObject.PI)



// es6
const PI = 22/7;
PI = 4;

