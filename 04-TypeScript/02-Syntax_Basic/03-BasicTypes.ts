
//    function getAverageMarks(): number{
    function getAverageMarks(marksArray: any): any{
        let totalMarks = 0;
        for(let i in marksArray){
            totalMarks += marksArray[i];
        }
        return totalMarks/marksArray.length;
    }

    function showDetails():void{
        let isMale: boolean = true;
        let age: number = 12;
        let name: string = "Lilley";
        let marks: Array<number> = [65, 75, 80, 74, 69];

        console.log("My name is : "+name);
        console.log("My age is : "+age);
        console.log("My average marks : "+getAverageMarks(marks));
        if(isMale){
            console.log("My gender is male")
        } else{
            console.log("My gender is female")
        }
    }

showDetails();