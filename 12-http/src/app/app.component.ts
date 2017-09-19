import { Component } from '@angular/core';

import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title;
  private users = null;

  constructor(private http: Http){
    console.log("constructor")
    this.title = "Http App";
  }
  ngOnInit(){
    console.log('on init');
    this.http.get("http://localhost:8080/getAllUsers")
      .map(function(res:Response){
        return res.json();
      })
      .subscribe((data)=>{
        console.log(data);
        this.users = data.users;
      })
  }
}
