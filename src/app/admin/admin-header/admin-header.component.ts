import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {

  constructor(
    private router: Router
  ) { }

  arrSideList = [
    { strModuleName: "Dashboard", icon: "fa-solid fa-chart-line" },
    { strModuleName: "Courses", icon: "fa-solid fa-list-ul", strLink: "/admin/courses" },
    { strModuleName: "Department", icon: "fa-solid fa-list-check", strLink: "/admin/departments" },
    { strModuleName: "Subjects", icon: "fa-solid fa-book", strLink: "/admin/subjects" },
    { strModuleName: "Students", icon: "fa-solid fa-user-graduate", strLink: "/admin/students-list" },
    { strModuleName: "Teachers", icon: "fa-solid fa-chalkboard-teacher", strLink: "/admin/staff-list" },
    { strModuleName: "Parents", icon: "fa-solid fa-users", strLink: "/admin/parents-list" },
    { strModuleName: "Exams", icon: "fa-solid fa-file-alt", strLink: "/admin/exams" },
    { strModuleName: "Results", icon: "fa-solid fa-poll", strLink: "/admin/results" },
    { strModuleName: "Attendance", icon: "fa-solid fa-users", strLink: "/admin/attendance" },
    { strModuleName: "Events", icon: "fa-solid fa-calendar-days", strLink: "/admin/events" },
    { strModuleName: "Discussions", icon: "fa-solid fa-comments" },
    { strModuleName: "Announcements", icon: "fa-solid fa-bullhorn" },
    { strModuleName: "Messages", icon: "fa-solid fa-envelope" },
    { strModuleName: "Finance", icon: "fa-solid fa-money-bill-wave" },
    { strModuleName: "Settings", icon: "fa-solid fa-cog" }
  ];

  fnSelectModule(link: any) {
    console.log('link', link);
    this.router.navigate([link])
  }

}
