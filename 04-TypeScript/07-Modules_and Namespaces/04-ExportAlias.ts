interface Employee {
    name: string;
    id: number;
    salary: number;
    doWork():void;
}

class PermanentEmployee implements Employee {
    public salary:number;
    constructor(public name, public id){
        this.salary = 25000;
    }
    public doWork():void{
        console.log("This is permanent employee and works 8 hours in a day.")
    }
}

function createEmp(name:string, id: number){
    let newEmp = new PermanentEmployee(name, id);
    console.log(newEmp.salary);
    newEmp.doWork();
}



//instead of using export keyword with definition type
export { Employee, PermanentEmployee, createEmp as CreateNewEmployee }