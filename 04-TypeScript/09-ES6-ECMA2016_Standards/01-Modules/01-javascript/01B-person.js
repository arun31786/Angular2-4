var log = function(){
    console.log("In person.js")
}

var Person = function (name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;
    
    var self = this;
    this.showDetails = function(){
        console.log("Name : "+self.name);
        console.log("Age : "+self.age);
        console.log("Address : "+self.address);
    }
}

// this script can use Employee if Empoyee script has been loaded
var mohan = new Employee('Mohan', 27, "Mumbai");
var ram = new Person('Ram Kapoor', 31, "Pune");


//var ramesh = new Person('Ramesh', 34, "Delhi");