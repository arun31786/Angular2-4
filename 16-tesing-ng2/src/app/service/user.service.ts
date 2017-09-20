import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private loggedIn: boolean = false;
  private user: any = {name: "Mark", age: 34};
  
  constructor() { }

  isLoggedIn() {
    return this.loggedIn;
  }

  getUser() {
    return this.user;
  }
}
