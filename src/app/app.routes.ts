import { Routes } from '@angular/router';
import { LoginComponent } from './pages/page/login/login.component';
import { ProfileComponent } from './pages/page/profile/profile.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
    }
];
