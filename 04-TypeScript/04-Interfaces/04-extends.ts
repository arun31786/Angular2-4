import { Category } from './02-construction/enums';

interface LibraryResource {
    catalogNumber: number;
}

interface Book{
    id: number;
    title: string;
    author: string;
    isAvailable: boolean;
    category: Category;
}

interface Encyclopedia extends LibraryResource, Book {
    volume: number;
}


let refBook : Encyclopedia = {
    id: 521,
    title: "The book of Knowledge",
    author: "Someone",
    isAvailable: true,
    category: Category.Motivational,
    catalogNumber: 2145,
    volume: 2
}


/*==========================*/

interface Person {
    name: string;
    email: string;
}

interface Author extends Person{
    totalBookPublished: number;
}

interface Librarian extends Person {
    department: string;
}
