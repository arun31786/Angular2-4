import { Component, OnInit } from '@angular/core';
import {UserService} from "./../user.service";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
