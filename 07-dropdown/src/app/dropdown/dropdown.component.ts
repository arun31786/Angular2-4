import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  dropdownClass:string;
  open: boolean = false;
  selectedCountry:string = null;

  // @Input('countryList') countryList;
  @Input('countryList') list;

  constructor(){
    this.dropdownClass = "dropdown";
  }

  ngOnInit(){

  }

  ngAfterViewInit(){
    console.log(this.list)
  }

  handleChange(){
    if(this.open){
      this.dropdownClass = "dropdown";
    } else {
      this.dropdownClass = "dropdown open";
    }
    this.open = !this.open;
  }

  handleChangeTitle(title){
    console.log(title);
    this.selectedCountry = title;
    this.handleChange();
  }

}
