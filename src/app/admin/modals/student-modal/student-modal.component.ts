import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-modal',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './student-modal.component.html',
  styleUrl: './student-modal.component.css'
})
export class StudentModalComponent {

  studentForm: FormGroup;

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
  ) {
    this.studentForm = this.fb.group({
      strStudentName: ['', Validators.required],
      strStudentEmail: ['', Validators.required],
      strStudentPhone: ['', Validators.required],
      strStudentId: ['', Validators.required],
      strStudentCourse: ['', Validators.required],
      strStudentDepartment: ['', Validators.required],
      intYear: ['', Validators.required],
      intSemester: ['', Validators.required],
      strStudentPassword: ['', Validators.required],
    })
  }

  fnOnSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched()
      return;
    }

    const obj = {
      strStudentName: this.studentForm.value.strStudentName,
      strStudentEmail: this.studentForm.value.strStudentEmail,
      strStudentPhone: this.studentForm.value.strStudentPhone,
      strStudentId: this.studentForm.value.strStudentId,
      strStudentCourse: this.studentForm.value.strStudentCourse,
      strStudentDepartment: this.studentForm.value.strStudentDepartment,
      intYear: this.studentForm.value.intYear,
      intSemester: this.studentForm.value.intSemester,
      strStudentPassword: this.studentForm.value.strStudentPassword,
    }

    console.log('obj', obj);

  }

  fnCloseModal() {
    this.activeModal.close('success')
  }

  fnDismissModal() {
    this.activeModal.close()
  }

}
