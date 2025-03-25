import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AdminStudentsListComponent } from './pages/admin-students-list/admin-students-list.component';
import { AdminStaffListComponent } from './pages/admin-staff-list/admin-staff-list.component';
import { AdminParentListComponent } from './pages/admin-parent-list/admin-parent-list.component';
import { ExamComponent } from './pages/exam/exam.component';
import { ResultsComponent } from './pages/results/results.component';
import { EventsComponent } from './pages/events/events.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'admin-profile', component: AdminProfileComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'students-list', component: AdminStudentsListComponent },
      { path: 'staff-list', component: AdminStaffListComponent },
      { path: 'parents-list', component: AdminParentListComponent },
      { path: 'exams', component: ExamComponent },
      { path: 'results', component: ResultsComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'events', component: EventsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
