import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CommonService implements HttpInterceptor {

  public apiURL: string = environment.API_ENDPOINT;
  private isBrowser: boolean;
  private token: string | null = null;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.token = localStorage.getItem('token');
    }
  }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.token ? `Bearer ${this.token}` : '',
    }),
  };

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.isBrowser ? localStorage.getItem('token') : null;

    if (token) {
      const clonedRequest = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(clonedRequest).pipe(catchError(this.handleError.bind(this)));
    }

    return next.handle(req).pipe(catchError(this.handleError.bind(this)));
  }

  handleError(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log('errorMessage', errorMessage);
    }

    if (error.status === 401) {
      this.router.navigate(['page/login']);
    }

    return throwError(() => error);
  }

}
