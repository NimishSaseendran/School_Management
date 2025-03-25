import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentModalComponent } from '../../modals/student-modal/student-modal.component';

@Component({
  selector: 'app-admin-students-list',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule
  ],
  templateUrl: './admin-students-list.component.html',
  styleUrls: ['./admin-students-list.component.css']
})
export class AdminStudentsListComponent {

  arrStudents: any = [];
  isLoading: boolean = false;
  modalRef: any;

  constructor(
    private adminService: AdminService,
    private modalService: NgbModal
  ) {
    this.fnGetStudentList()
  }

  fnGetStudentList() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 10000);
    this.adminService.getStudents().subscribe((res => {
      this.isLoading = false
      this.arrStudents = res.data
    }))
  }

  fnDeleteStudent(strStudentId: string) {
    const obj = {
      strStudentId: strStudentId
    }
    this.adminService.deleteStudent(obj).subscribe((res => {
      console.log('resssss', res.data);
      this.fnGetStudentList()
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
