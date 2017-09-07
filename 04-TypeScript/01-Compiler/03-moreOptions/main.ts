//This is a person class
class Person{
    protected fullName: string;
    constructor(public firstName: string, public lastName: string){
        this.fullName = firstName + " " + lastName;    
    }
}

// This is an Employee class that extends Person class
class Employee extends Person{
    constructor(public firstName: string, public lastName: string, public id:number, public department: string) {
        super(firstName, lastName)
        this.id = id;
        this.department = department;
    }
    
    showDetails(){
        console.log("Employee name is : "+this.fullName);
        console.log("Employee id number is : "+this.id);
        console.log("Department employee works is : "+this.department);
    } 
    
    
    someMethod(){
    
        var x = 2;
        // Error: Unused label.
        loop: while (x > 0) {  
            x++;
        }
        
        switch(x){
            case 1: console.log("x is : 1");
            break;
            case 2: console.log("x is : 2");
            break;
            case 3: console.log("x is : 3");
            break;
            case 4: console.log("x is : 4");
            break;
            default: console.log("x is out of the range");
            break;
        }
        
        return true;
    
        // this is unreachable code
        console.log("This message will not be displayed");
        

    }
}

//Initializing employee
var emp = new Employee("Arun", "Kumar",1225, "IT");

//show all the details of employee
emp.showDetails();