import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AddComponent } from './add/index';



const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'add', component: AddComponent },
    
     

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);