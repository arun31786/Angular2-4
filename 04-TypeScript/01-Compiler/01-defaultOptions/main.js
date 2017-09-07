var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, id, department) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.id = id;
        _this.department = department;
        _this.id = id;
        _this.department = department;
        return _this;
    }
    Employee.prototype.showDetails = function () {
        console.log("Employee name is : " + this.fullName);
        console.log("Employee id number is : " + this.id);
        console.log("Department employee works is : " + this.department);
    };
    return Employee;
}(Person));
var emp = new Employee("Arun", "Kumar", 1225, "IT");
emp.showDetails();
