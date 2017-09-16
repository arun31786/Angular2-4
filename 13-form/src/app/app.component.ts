import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
	button{
	    display: block;
		width: 100%;
	}
  `]
})
export class AppComponent {
	isTemplateDriven = false;
}
