import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from '../commonService/common.service';
import { ApiResponse } from '../../models/api-response';

// Define a Student interface (adjust fields as needed)
export interface Student {
  strStudentId: string;
  strName: string;
  strEmail: string;
  strPhone: string;
  strDepartment?: string;
  strCourse?: string;
  intYear?: number;
  intSemester?: number;
  dblCGPA?: number;
  dblAttendance?: number;
  strPassword?: string;
  strRole?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // Use the base URL from CommonService
  private apiUrl: string;

  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) {
    this.apiUrl = this.commonService.apiURL;
  }

  getStudents() {
    return this.http.get<ApiResponse>(`${this.apiUrl}/api/students/getAllStudents`);
  }

  createStudent(obj: any) {
    return this.http.post(`${this.apiUrl}/api/students/createStudent`, obj);
  }

  updateStudent(obj: any) {
    return this.http.post(`${this.apiUrl}/api/students/updateStudent`, obj);
  }

  deleteStudent(obj: any) {
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/api/students/deleteStudent`, obj);
  }

  getAllCourses() {
    return this.http.get<ApiResponse>(`${this.apiUrl}/api/course/getAllCourses`);
  }

  createCourse(obj: any) {
    return this.http.post(`${this.apiUrl}/api/course/createCourse`, obj);
  }

  updateCourse(obj: any) {
    return this.http.post(`${this.apiUrl}/api/course/updateCourse`, obj);
  }

  deleteCourse(obj: any) {
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/api/course/deleteCourse`, obj);
  }

  getAllDepartment() {
    return this.http.get<ApiResponse>(`${this.apiUrl}/api/department/getAllDepartment`);
  }

  createDepartment(obj: any) {
    return this.http.post(`${this.apiUrl}/api/department/createDepartment`, obj);
  }

  updateDepartment(obj: any) {
    return this.http.post(`${this.apiUrl}/api/department/updateDepartment`, obj);
  }

  deleteDepartment(obj: any) {
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/api/department/deleteDepartment`, obj);
  }

  getAllSubjects() {
    return this.http.get<ApiResponse>(`${this.apiUrl}/api/subject/getAllSubjects`);
  }

  createSubject(obj: any) {
    return this.http.post(`${this.apiUrl}/api/subject/createSubject`, obj);
  }

  updateSubject(obj: any) {
    return this.http.post(`${this.apiUrl}/api/subject/updateSubject`, obj);
  }

  deleteSubject(obj: any) {
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/api/subject/deleteSubject`, obj);
  }

  getAllExams() {
    return this.http.get<ApiResponse>(`${this.apiUrl}/api/exams/getAllExams`);
  }

  createExams(obj: any) {
    return this.http.post(`${this.apiUrl}/api/exams/createExam`, obj);
  }

  updateExams(obj: any) {
    return this.http.post(`${this.apiUrl}/api/exams/updateExam`, obj);
  }

  deleteExams(obj: any) {
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/api/exams/deleteExam`, obj);
  }
}
