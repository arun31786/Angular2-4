import {ModuleWithProviders} from "@angular/core";
import{Routes, RouterModule} from "@angular/router";

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {AuthenticateGuard} from "./authenticate.guard";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'welcome', component: WelcomeComponent, canActivate: [AuthenticateGuard]}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);