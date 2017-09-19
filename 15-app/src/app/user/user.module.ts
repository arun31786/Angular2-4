import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from "./user.routing";
import { LoginComponent } from './login/login.component';
import { UserHttpService } from './service/user-http.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthenticateGuard } from "./authenticate.guard";


@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  providers:[UserHttpService, AuthenticateGuard],
  declarations: [LoginComponent, WelcomeComponent]
})
export class UserModule { }
