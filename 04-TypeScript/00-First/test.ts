console.log('First TypeScript program');

class Person{
    constructor(public name, public age){
        this.name = name;
        this.age = age;
    }

    show(){
        console.log(`Name is ${this.name}
            Age is ${this.age}`)
    }
}

var arun = new Person('arun', 34);
arun.show();