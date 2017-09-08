import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
	template: `
		<h2>Hello Angular2.x</h2>
		<h3>{{title}}</h3>
	`
})


export class AppComponent {
  title = 'App Component';
}
