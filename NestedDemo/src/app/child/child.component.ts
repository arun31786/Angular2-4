import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input("username") username;
  @Output('childEvent') event: EventEmitter<any> = new EventEmitter();
  // private username: string = 'Arun';
  constructor() { }

  ngOnInit() {
  }
  toParent(name){
    this.event.next(name);
  }

}
