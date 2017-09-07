export interface Employee {
    name: string;
    id: number;
    salary: number;
    doWork():void;
}

export class PermanentEmployee implements Employee {
    public salary:number;
    constructor(public name, public id){
        this.salary = 25000;
    }
    public doWork():void{
        console.log("This is permanent employee and works 8 hours in a day.")
    }
}

export function createEmp(name:string, id: number){
    let newEmp = new PermanentEmployee(name, id);
    console.log(newEmp.salary);
    newEmp.doWork();
}


function someFunc(){
    console.log("This function is not exported, so it is a private function");
}
