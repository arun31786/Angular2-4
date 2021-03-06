import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from "./user.routing";
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserService } from "./user.service";
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  providers: [UserService],
  declarations: [RegistrationComponent, LoginComponent, WelcomeComponent]
})
export class UserModule { }
