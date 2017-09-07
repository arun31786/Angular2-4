// without annotations
let myName = "Arun Kumar";
//myName = 55;// compilation error

function getRandomNumber(){
    return Math.floor(Math.random()*1000);
}
// myName = getRandomNumber();// compilation error


//with type annotations
let myAddress: string = "Delhi, India";
//myAddress = 45;// compilation error

function generateRandomNumber(): number{
    return Math.floor(Math.random()*1000);
}
// myAddress = generateRandomNumber();// compilation error