enum Category {Language, Science, History, Motivational};

function getAllBooks(): Array<Object>{
    // add a unique id to the book
    let books = [
        {id:1, title: 'Tips of JavaScript', author:'Arun Kumar', isAvailable: false, category: Category.Language},
        {id:2, title: 'AngularJs with 10 projects', author:'Arun Kumar', isAvailable: true, category: Category.Language},
        {id:3, title: 'You can win', author:'Shiv Khera', isAvailable: true, category: Category.Motivational},
        {id:4, title: 'India is great', author:'Mahatma Gandhi', isAvailable: false, category: Category.History}
    ];
    return books;
}

function logFirstAvailableBook(books): void{
    let numberOfBooks: number = books.length;
    let firstAvailableBook: string = '';

    for(let currentBook in books){
        if(books[currentBook].isAvailable){
            firstAvailableBook = books[currentBook].title;
            break;
        }
    }

    console.log("Total number of books : "+numberOfBooks);
    console.log("First available book : "+firstAvailableBook);
}

function getBookTitlesByCategory(categoryFilter: Category): Array<string>{
    console.log("Getting books in category : "+Category[categoryFilter]);

    const allBooks = getAllBooks();
    const filteredTitles: string[] = [];//blank string array

    for(let currentBook of allBooks){
        if(currentBook['category'] === categoryFilter){
            filteredTitles.push(currentBook['title']);
        }
    }
    return filteredTitles;
}

function getBookById(id: number){
    const allBooks = getAllBooks();
    return allBooks.filter(book => book['id'] === id)[0];
}

/*
function createCustomerId(name: string, id:number): string{
    return name+id;
}

let num:number;//num can store only numbers;
    num = 55;

let IdGenerator : (someString: string, someNumber: number) => string;//IdGenerator can store a function this particular syntax only
    IdGenerator = createCustomerId;
*/

//equivalent
let IdGenerator : (someString: string, someNumber: number) => string;//IdGenerator can store a function this particular syntax only
    IdGenerator = (name: string, id:number) => {return name+id;}


let myId = IdGenerator("Arun",2786);
console.log("Customer Id: "+myId);


/*
const developerBooks : string[] = getBookTitlesByCategory(Category.Language);
developerBooks.forEach((currentValue, currentIndex, completeArra) => console.log(++currentIndex + '. '+currentValue));

//book by id
let firstBook = getBookById(1);
console.log(firstBook);
*/


