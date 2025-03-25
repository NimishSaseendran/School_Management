import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AdminProfileComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    AdminLayoutComponent
  ]
})
export class AdminModule { }
