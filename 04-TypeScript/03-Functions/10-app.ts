enum Category {Language, Science, History, Motivational};

function getAllBooks(): Array<Object>{

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

function getBookTitlesByCategory(categoryFilter: Category = Category.Language): Array<string>{
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


function createCustomer(name:string, age?:number, city?:string):void{
    console.log("Creating customer : "+name);
    if(age){
        console.log("Assigning age to the customer : "+age);
    }
    if(city){
        console.log("Assigning city to the customer : "+city);
    }
}

/*added here*/
let languageBooks = getBookTitlesByCategory();//language category is default category
languageBooks.forEach(title => console.log(title));

let scienceBooks = getBookTitlesByCategory(Category.Science);//language category is default category
scienceBooks.forEach(title => console.log(title));



/*added here*/



/*
createCustomer("Vinod");
createCustomer("Carl", 35);
//createCustomer("Thomus", "Tokyo");//compilation error, first it should be a number
createCustomer("Thomus", 28, "Tokyo");
*/

/*
 let IdGenerator : (someString: string, someNumber: number) => string;//IdGenerator can store a function this particular syntax only
 IdGenerator = (name: string, id:number) => {return name+id;}


 let myId = IdGenerator("Arun",2786);
 console.log("Customer Id: "+myId);

 */



/*
 const developerBooks : string[] = getBookTitlesByCategory(Category.Language);
 developerBooks.forEach((currentValue, currentIndex, completeArra) => console.log(++currentIndex + '. '+currentValue));

 //book by id
 let firstBook = getBookById(1);
 console.log(firstBook);
 */


