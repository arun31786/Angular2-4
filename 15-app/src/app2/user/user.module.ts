import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from "./user.routing";
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthenticateGuard } from './authenticate.guard';
import { AuthService } from './service/auth.service';
import { UserHttpService } from './service/user-http.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    routing
  ],
  providers:[AuthenticateGuard, UserHttpService],
  declarations: [LoginComponent, WelcomeComponent]
})
export class UserModule { }
