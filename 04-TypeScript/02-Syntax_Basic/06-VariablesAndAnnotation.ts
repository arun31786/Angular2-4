function getAllBooks(){
    let books = [
        {title: 'Tips of JavaScript', author:'Arun Kumar', isAvailable: false},
        {title: 'AngularJs with 10 projects', author:'Arun Kumar', isAvailable: true},
        {title: 'You can win', author:'Shiv Khera', isAvailable: true},
        {title: 'India is great', author:'Mahatma Gandhi', isAvailable: false}
    ];
    return books;
}

function logFirstAvailableBook(books): void{
    let numberOfBooks: number = books.length;
    let firstAvailableBook: string = '';

    for(let currentBook in books){
//        console.log(books[currentBook]);
        if(books[currentBook].isAvailable){
            firstAvailableBook = books[currentBook].title;
            break;
        }
    }

    console.log("Total number of books : "+numberOfBooks);
    console.log("First available book : "+firstAvailableBook);
}

const myBooks:any = getAllBooks();
let newBook = {title: 'Humans', author:'Dr. Carl', isAvailable: true};
myBooks.push(newBook);

logFirstAvailableBook(myBooks);