
//both name and age parameters are required
function createCustomer(name: string, age: number): string{
    return "Customer name is "+name+" and age is "+age;
}


//age parameter is optional
// all required parameters must be declared first
function showCustomer(name: string, age?:number):string{
    if(age){
        return "Customer name is "+name+" and age is "+age;
    }
    return "Customer name is "+name;
}

console.log(showCustomer("ARun"));
console.log(showCustomer("sf",5));

//default values
function getBookByTitle(title:string="Java Cookbook"){}
//expressions can be used instead of leterals
//function getBookByAuthor(author:string=getMostPopularAuthor()){}
