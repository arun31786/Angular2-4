import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable() 
export class UserHttpService {

  constructor(private _http: Http) { }
  login(user:any) {
    return this._http.post('http://localhost:8080/login',{username: user.username, password: user.password})
      .map((response: Response) => {
        return response.json()
      })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }  

}
