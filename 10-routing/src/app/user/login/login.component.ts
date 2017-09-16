import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onNavigate(){
    console.log("jump to another component");
    this.router.navigate(["/home/123"]);
    // this.router.navigate(["/welcome/:username"]);
  }


}
