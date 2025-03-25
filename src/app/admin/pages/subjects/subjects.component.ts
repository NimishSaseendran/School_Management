import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentModalComponent } from '../../modals/student-modal/student-modal.component';

@Component({
  selector: 'app-subjects',
  imports: [
    CommonModule,
    NgbModule
  ],
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  arrSubjects: any = [];
  isLoading: boolean = false;
  modalRef: any;

  constructor(
    private adminService: AdminService,
    private modalService: NgbModal
  ) {
    this.fnGetSubject()
  }

  fnGetSubject() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 10000);
    this.adminService.getAllSubjects().subscribe((res => {
      this.isLoading = false
      this.arrSubjects = res.data
    }))
  }

  fnDeleteSubject(id: string) {
    const obj = {
      pkSubjectId: id
    }
    this.adminService.deleteSubject(obj).subscribe((res => {
      console.log('resssss', res.data);
      this.fnGetSubject()
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

