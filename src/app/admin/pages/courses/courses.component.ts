import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentModalComponent } from '../../modals/student-modal/student-modal.component';

@Component({
  selector: 'app-courses',
  imports: [
    CommonModule,
    NgbModule
  ],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  arrCourses: any = [];
  isLoading: boolean = false;
  modalRef: any;

  constructor(
    private adminService: AdminService,
    private modalService: NgbModal
  ) {
    this.fnGetCourseList()
  }

  fnGetCourseList() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 10000);
    this.adminService.getAllCourses().subscribe((res => {
      this.isLoading = false
      this.arrCourses = res.data
    }))
  }

  fnDeleteStudent(pkCourseId: string) {
    const obj = {
      pkCourseId: pkCourseId
    }
    this.adminService.deleteCourse(obj).subscribe((res => {
      console.log('resssss', res.data);
      this.fnGetCourseList()
    }))
  }

  onModalOpen() {
    this.modalRef = this.modalService.open(StudentModalComponent)
    this.modalRef.result
      .then((result: any) => {
        console.log(result);
      })
  }
}

