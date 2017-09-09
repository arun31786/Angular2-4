import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input('country') country;
  @Output('changeTitleEvent') selectedCountryEvetn: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeTitle(){
    this.selectedCountryEvetn.next(this.country);
  }

}
