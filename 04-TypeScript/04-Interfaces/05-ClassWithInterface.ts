
interface Person {
    name: string;
    email: string;
}

interface Librarian extends Person {
    section: string;
    doWork: (hours: number) => void;
}

class SchoolLibrarian implements Librarian {
    name: "Ram";
    email: "Ram@myschool.com";
    section: "junior";
    doWork(hours){
        console.log(this.name +" works "+ hours +" to help students in the library.");
    }
}

let kidsLibrarian : Librarian = new SchoolLibrarian();
console.log(kidsLibrarian);
console.log(kidsLibrarian.doWork(5));

