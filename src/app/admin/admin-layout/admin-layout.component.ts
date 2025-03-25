import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule, AdminHeaderComponent], // Import AdminHeaderComponent here
  template: `
    <app-admin-header></app-admin-header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AdminLayoutComponent { }
