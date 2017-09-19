import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './../service/auth.service';
import { UserHttpService } from './../service/user-http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService:AuthService, private http: UserHttpService) { }

  ngOnInit() {
  }
  onLogin(){
    this.http.login({username: 'Mark', password: 'Mark'})
    .subscribe(
      response => {
        console.log(response);
        if(response.success){
          this.authService.isLoggedIn = response.success;
          this.authService.list = response.data;
          this.router.navigate(["/user/welcome"]);
        } else {
          alert("invalid details")
        }
      },
      error => {
        console.log(error)
      }
    );
  }

}
