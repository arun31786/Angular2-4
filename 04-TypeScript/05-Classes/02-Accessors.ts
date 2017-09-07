
class Person {
    name: string;

    // getter & setter are allowed in es5 or higher
    // getter must have retrun type
    get nameAccessor(): string{
        return this.name;
    }

    // setter must have only one parameter and no return type
    set nameAccessor(name: string) {
        this.name = name;
    }
}

let ramesh = new Person();
console.log(ramesh.nameAccessor);

ramesh.nameAccessor = "Ramesh";
console.log(ramesh.nameAccessor);
