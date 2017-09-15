import {ModuleWithProviders} from "@angular/core";
import{Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},

    {path: 'home', component: HomeComponent},

    {path: 'user', loadChildren: './user/user.module#UserModule'}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);