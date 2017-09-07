

//variable my be declared with function type
function publicationMessage(year: number): string{
    return 'Date published: '+year;
}

//combination of paramter types and return type
let publishFunc: (someYear: number) => string;

//function assigned must have the same signature as the variable type
publishFunc = publicationMessage;

let publishDate: string = publishFunc(2015);