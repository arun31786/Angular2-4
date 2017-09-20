import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title:string = 'My App';
  private counter:number = 0;

  increase(){
    this.counter++;
  }
  decrease(){
    this.counter--;
  }
}
