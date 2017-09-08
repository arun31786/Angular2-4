import { Component, Input } from "@angular/core";

@Component({
    selector: 'my-item',
    template: `
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1" >
        <li *ngFor="let country of countryList">
            <a href="#">{{country}}</a>
        </li>
    </ul>
    `
})

export class ItemComponent{
    @Input('countries') countryList;    

    ngAfterViewInit(){
        console.log(this.countryList)
    }
}