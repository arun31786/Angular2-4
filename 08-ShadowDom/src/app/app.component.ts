import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives Demo';
  private isLoggedIn:boolean = true;
  private items:number[] = [1, 3, 5, 7, 9];
  private value = 15;
  private cssStyle = {"background": "red"}
  private class = "cssClass";
  
  toggle(){
    this.isLoggedIn = !this.isLoggedIn;
  }


  // pipe code
  myName = "Arun KumAr";
  today = new Date(2017, 8, 11);
  cities = ['Tokyo', 'New york', 'Delhi', 'Melbourne'];

}
