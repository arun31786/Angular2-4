import { Component } from '@angular/core';
import { DropDownComponent } from './dropdown.component';

@Component({
  selector: 'my-app',
	template: `
		<h2>Bootstrap Dropdown</h2>

		<my-dd [countries]="countryList"></my-dd>
	`,
	directives:[DropDownComponent]
})


export class AppComponent {
	countryList: string[] = ["India", "England", "Japan"];

}
