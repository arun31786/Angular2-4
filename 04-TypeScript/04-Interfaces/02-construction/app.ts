import { Category } from './enums';
import { Book } from './interfaces';

function getAllBooks(): Book[]{

    let books = [
        {id:1, title: 'Tips of JavaScript', author:'Arun Kumar', isAvailable: false, category: Category.Language},
        {id:2, title: 'AngularJs with 10 projects', author:'Arun Kumar', isAvailable: true, category: Category.Language},
        {id:3, title: 'You can win', author:'Shiv Khera', isAvailable: true, category: Category.Motivational},
        {id:4, title: 'India is great', author:'Mahatma Gandhi', isAvailable: false, category: Category.History}
    ];
    return books;
}


function getBookById(id: number): Book{
    const allBooks = getAllBooks();
    return allBooks.filter(book => book['id'] === id)[0];
}


function printBook(book: Book): void {
    //because book is Book type so IDE will help you with code completion now
    console.log(book.title + ' by ' + book.author);
}

let myBook : Book = {
    id : 8,
    author: 'Jane Austin',
    title: 'Health is Money',
    isAvailable: true,
    category: Category.Science,
    year: 2004,
    copies: 4
}

printBook(myBook);