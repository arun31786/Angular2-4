import {ModuleWithProviders} from "@angular/core";
import{Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},

    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},

    {path: 'user', loadChildren: './user/user.module# '}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);