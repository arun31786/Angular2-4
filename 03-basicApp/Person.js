
export default class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    show(){
        console.log(`My name is ${this.name}`);
    }
}