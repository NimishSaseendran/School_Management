import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentModalComponent } from '../../modals/student-modal/student-modal.component';

@Component({
  selector: 'app-exam',
  imports: [
    CommonModule,
    NgbModule
  ],
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {
  arrExams: any = [];
  isLoading: boolean = false;
  modalRef: any;

  constructor(
    private adminService: AdminService,
    private modalService: NgbModal
  ) {
    this.fnGetExams()
  }

  fnGetExams() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 10000);
    this.adminService.getAllExams().subscribe((res => {
      this.isLoading = false
      this.arrExams = res.data
    }))
  }

  fnDeleteExam(id: string) {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 10000);
    const obj = {
      pkExamId: id
    }
    this.adminService.deleteExams(obj).subscribe((res => {
      this.isLoading = false
      console.log('resssss', res.data);
      this.fnGetExams()
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
