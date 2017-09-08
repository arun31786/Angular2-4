import { Component, Input } from "@angular/core";
import { ItemComponent } from "./item.component";
@Component({
    selector: "my-dd",
    template:`
        <div class={{className}}>
        <button (click)="changeDropdownClassName()" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Dropdown
            <span class="caret"></span>
        </button>
        <my-item [countries]="countryList"></my-item>
        
    </div>

    `,
    directives:[ItemComponent]
})

export class DropDownComponent{

    @Input('countries') countryList;

    constructor(){
        console.log(this.countryList)
    }


    open=false;
	className = "dropdown";

	changeDropdownClassName(){
		if(this.open){
			this.open = false;
			this.className = "dropdown";
		} else {
			this.open = true;
			this.className = "dropdown open";
		}
	}
}