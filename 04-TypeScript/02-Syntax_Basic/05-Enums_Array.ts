//enum
enum Direction {North, East, West, South};
enum Day {Monday=1, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}
enum Coin {Head=5, Tail=10};

let today: Day = Day.Tuesday;

console.log(today);//2
console.log(Day[today]);//Tuesday


//Array
let studentNames: string[] = ['Miley','Carl','Tom','Ram'];
let employeeNames: Array<string> = ['Thomus','Mohan','Mac','Tom'];

let anyArray: any[] = [422, "Red", false, {name: "arun", age: 30, address: 'delhi'}]


//Tuple
let myTuple:Array<[number, string]> = [[25, 'Ram'],[22, 'Carl'],[21, 'Mohan'],[19, 'Miley']];
let ages:Array<number> = [];
let names:Array<string> = [];

for(let tuple of myTuple){
    ages.push(tuple[0]);
    names.push(tuple[1]);
}

console.log("MyTuple is : "+myTuple);
console.log("Ages are : "+ages);
console.log("Names are : "+names);
