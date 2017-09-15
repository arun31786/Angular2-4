import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from "./user.routing";
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [RegistrationComponent, LoginComponent]
})
export class UserModule { }
