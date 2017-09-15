import { Component, OnInit } from '@angular/core';

import { UserService } from "./../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.userService);
    // this.userService.name = 'Rajeev';
  }

  someLogic(name){
    console.log("Name is "+name);
    this.userService.name = name;
  }

}
