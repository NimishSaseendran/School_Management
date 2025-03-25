import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../../services/auth/auth-service.service';
import { ProfileComponent } from '../profile/profile.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // ✅ Fixed `styleUrl` -> `styleUrls`
})

export class LoginComponent {

  loginForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
    console.log('component loaded');

  }

  fnLogin() {
    console.log('Logging in with:', this.loginForm.value.email, this.loginForm.value.password);
    const obj = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }
    this.authService.login(obj).subscribe((res) => {
      if (res && res.success) {
        localStorage.setItem('token', res.token as string)
        localStorage.setItem('username', res.username as string)
        localStorage.setItem('role', res.role as string)
        const role = res.role
        if (role == 'admin') {
          this.router.navigate(['/admin'])
        }
      }
    })
  }

}
