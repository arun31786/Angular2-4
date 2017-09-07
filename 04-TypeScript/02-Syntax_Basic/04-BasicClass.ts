class Student{
    private isMale: boolean = true;
    private age: number = 12;
    private name: string = "Lilley";
    private marks: Array<number> = [65, 75, 80, 74, 69];


    //    private getAverageMarks(): number{
    private getAverageMarks(marksArray): any{
        let totalMarks = 0;
        for(let i in marksArray){
            totalMarks += marksArray[i];
        }
        return totalMarks/marksArray.length;
    }

    public showDetails():void{
        console.log("My name is : "+this.name);
        console.log("My age is : "+this.age);
        console.log("My average marks : "+this.getAverageMarks(this.marks));
        if(this.isMale){
            console.log("My gender is male")
        } else{
            console.log("My gender is female")
        }
    }
}

let std = new Student();
std.showDetails();