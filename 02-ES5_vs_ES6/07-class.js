var Person = function(name, age){
	this.name = name;
	this.age = age;

	this.show = function(){
		console.log(`${this.name} and age is ${this.age}`) 
    }
}




class Person{
	constructor(name, age){
		this.name = name;
	this.age = age;
	}

	show(){
		console.log('class is working')
	}
}