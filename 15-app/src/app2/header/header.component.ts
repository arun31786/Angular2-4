import { Component, OnInit } from '@angular/core';
import { AuthService } from './../user/service/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() { }

  onLogout(){
    this.authService.isLoggedIn = false;
    this.router.navigate(["/"]);
  }

}
