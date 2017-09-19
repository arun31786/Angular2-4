import { Component, OnInit } from '@angular/core';
import { UserHttpService } from './../service/user-http.service';
import { AuthService } from './../../service/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userid='Mark';
  private pwd='Mark';

  constructor(private userHttpService: UserHttpService, private authService:AuthService, private router:Router) { }

  onLogin(){
    this.userHttpService.login({username: this.userid, password: this.pwd})
    .subscribe(
      response => {
        console.log(response);
        if(response.success){
          // alert('valid')
          this.authService.isLoggedIn = response.success;
          this.authService.list = response.data;
          this.authService.username = this.userid;
          console.log(this.authService);
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

  ngOnInit() {
  }

}
