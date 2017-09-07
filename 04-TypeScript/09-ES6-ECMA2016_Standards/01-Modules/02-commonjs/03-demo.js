var circle = require("./02-circle");
var encapsulation = require("./01-Encapsulation");

console.log( `The area of a circle of radius 4 is ${circle.area(4)}`);



//console.log(encapsulation.myRevealingModule);
encapsulation.myRevealingModule.getObject();

encapsulation.myRevealingModule.setName( "Arun Kumar" );
encapsulation.myRevealingModule.setAge( 32 );

//console.log(encapsulation.myRevealingModule)

encapsulation.myRevealingModule.getObject();