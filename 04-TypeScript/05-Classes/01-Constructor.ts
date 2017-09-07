
interface Person {
    name: string;
    email: string;
}

interface Librarian extends Person {
    section: string;
    doWork: (hours: number) => void;
}

class SchoolLibrarian implements Librarian {

    constructor(public name, public email, public section){
        // look at the compiled javascript, following code is automatically added
        // this.name = name
        // this.email = email
        // this.section = section
    }

    doWork(hours){
        console.log(this.name +" works "+ hours +" to help students in the library.");
    }

}

let someLibrarian : Librarian = new SchoolLibrarian("Carl", "Carl@someschool.com", "sineor");
console.log(someLibrarian);
console.log(someLibrarian.doWork(5));
