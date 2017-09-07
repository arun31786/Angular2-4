class Student{
    constructor(public name: string, public age: number){}
    static schoolName : string = 'Best School';
}

let student1 = new Student("Thomus", 16);
console.log(student1);
//console.log(student1.schoolName);//error in compilation
console.log(Student.schoolName);

let student2 = new Student("Carl", 12);
console.log(student2);
console.log(Student.schoolName);

Student.schoolName = "some other school";
let student3 = new Student("Ram", 15);
console.log(student3);
console.log(Student.schoolName);
