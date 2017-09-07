module app{
	export interface IGreeter{
		greet(): void;
	}
	
	export class Greeter implements IGreeter{
		private greeting: string;
		constructor(greeting:string){
			this.greeting = greeting;
		}
		greet(): void {
			console.log(this.greeting);
            if(this.greeting.trim().length>0){
                 document.getElementById("greetElement").innerText = this.greeting;
                 document.getElementById("error").innerText = "";
            } else{
                 document.getElementById("error").innerText = "You can not leave it blank...";
            }
		}
	}
}


/*
DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
*/
document.addEventListener("DOMContentLoaded", ()=> {
	var btn = document.getElementById("btnGreet");
	btn.addEventListener("click", ()=> {
		var name : string = (<HTMLInputElement>document
								.getElementById("txtName"))
								.value;
		var greeter: app.IGreeter = new app.Greeter(name);
		greeter.greet();
	});
});



