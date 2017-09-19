import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {UserModule } from './user/user.module';
import { AboutComponent } from './about/about.component';
import { AuthService } from './user/service/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    routing,
    UserModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
