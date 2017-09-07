var log = function(){
    console.log("In employee.js")
}

var Employee = function (id, name, sal){
    this.name = name;
    this.id = id;
    this.sal = sal;
    
    var self = this;
    this.showDetails = function(){
        console.log("Id : "+self.id);
        console.log("Name : "+self.name);
        console.log("Salary : "+self.sal);
    }
}


var mark = new Employee(1022, 'Mark', 50000);
var ramesh = new Employee(12, 'Ramesh', 50000);