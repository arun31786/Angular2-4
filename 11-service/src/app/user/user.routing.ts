import {ModuleWithProviders} from "@angular/core";
import{Routes, RouterModule} from "@angular/router";

import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'welcome', component: WelcomeComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);