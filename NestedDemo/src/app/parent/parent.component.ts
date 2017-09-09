import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
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
