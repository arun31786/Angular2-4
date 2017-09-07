console.log('First TypeScript program');
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function () {
        console.log("Name is " + this.name + "\n            Age is " + this.age);
    };
    return Person;
}());
var arun = new Person('arun', 34);
arun.show();
