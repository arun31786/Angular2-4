//This is a person class
abstract class Person{
    protected fullName: string;
    constructor(public firstName, public lastName){
        this.fullName = firstName + ' ' + lastName;
    }
}

// This is an Employee class that extends Person class
class Employee extends Person {
    constructor(firstName, lastName, public id, public department) {
        super(firstName, lastName)
    }

    showDetails() {
        console.log("Employee name is : " + this.fullName);
        // console.log("Employee name is : " + super.fullName);//undefiend
        console.log("Employee id number is : " + this.id);
        console.log("Department employee works is : " + this.department);
    }
}

// let person = new Person("Arun", "Kumar");//can not create instance of the abstract class
let emp = new Employee("Arun", "Kumar", 214, "IT");
emp.showDetails();