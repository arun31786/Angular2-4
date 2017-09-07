/*
    A Person should speak.
    A Person should eat.
    A Person should sleep.
    A Person should work.
*/

interface Person {
    speak: () => string;
    eat: (food:string) => string;
    sleep: () => string;
    work: (companyName: string) => string;
}

let person : Person = {
    speak: () => "I am speaking",
    eat: (food:string) => "I am eating "+food,
    sleep: () => "I am sleeping.",
    work: (companyName: string) => "I work in "+companyName
}


console.log(person.speak());
console.log(person.eat("Burger"));
console.log(person.sleep());
console.log(person.work("Google"));
