//This is a person class
class Person{
    protected fullName: string;
    constructor(public firstName, public lastName){
        this.fullName = firstName + " " + lastName;    
    }
}

// This is an Employee class that extends Person class
class Employee extends Person{
    constructor(public firstName, public lastName, public id, public department) {
        super(firstName, lastName)
        this.id = id;
        this.department = department;
    }
    
    showDetails(){
        console.log("Employee name is : "+this.fullName);
        console.log("Employee id number is : "+this.id);
        console.log("Department employee works is : "+this.department);
    } 
}

//Initializing employee
var emp = new Employee("Arun", "Kumar",1225, "IT");

//show all the details of employee
emp.showDetails();