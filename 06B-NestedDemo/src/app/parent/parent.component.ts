import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  // encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.Native,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  private username: string = 'Arun';
  constructor() { }

  ngOnInit() {
  }

  handleChildText(arg:string):any{
    console.log(arg);
    this.username = arg;
  }

}
