import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CommonService } from '../commonService/common.service';
import { ApiResponse } from '../../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient, private commonService: CommonService) { }

  login(obj: any): Observable<ApiResponse> {
    return this.http
      .post<ApiResponse>(`${this.commonService.apiURL}/api/users/userLogin`, obj)
      .pipe(retry(1), catchError(this.commonService.handleError.bind(this.commonService)));
  }
}
