let allBooks: any[] = [];
let filteredBooksByAuthor = allBooks.filter(function(book){
    return book['author'] === 'Arun Vahsisht';
});

let filteredBooksByCategory = allBooks.filter(book => book['category']=== Category.Language);






allBooks.forEach(() => console.log('Done reading!'));

allBooks.forEach(title => console.log(title));

allBooks.forEach((title, author) => console.log(title + ' by '+author));

allBooks.forEach((title, author) => {
    console.log(title + ' by '+author);
    //more stuff
});