import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentModalComponent } from '../../modals/student-modal/student-modal.component';

@Component({
  selector: 'app-departments',
  imports: [
    CommonModule,
    NgbModule
  ],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
  arrDepartments: any = [];
  isLoading: boolean = false;
  modalRef: any;

  constructor(
    private adminService: AdminService,
    private modalService: NgbModal
  ) {
    this.fnGetAllDept()
  }

  fnGetAllDept() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 10000);
    this.adminService.getAllDepartment().subscribe((res => {
      this.isLoading = false
      this.arrDepartments = res.data
    }))
  }

  fnDeleteDept(id: string) {
    const obj = {
      pkDepartmentId: id
    }
    this.adminService.deleteDepartment(obj).subscribe((res => {
      console.log('resssss', res.data);
      this.fnGetAllDept()
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