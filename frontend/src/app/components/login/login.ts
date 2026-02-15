import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login-service';
import { Router } from '@angular/router';
import { JwtTokenStorage } from '../../services/jwt-token-storage';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginService = inject(LoginService);
  jwtTokenStorage = inject(JwtTokenStorage);
  authService = inject(AuthService);
  router = inject(Router);

  username: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  onLogin(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter username and password';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.loginService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Store token
        this.jwtTokenStorage.setToken(response.token);
        
        // Set authentication in AuthService
        this.authService.setAuthenticated(response.token);
        
        // Navigate to appropriate dashboard based on role
        const role = this.authService.getCurrentRole();
        this.isLoading = false;
        
        if (role === 'CUSTOMER') {
          this.router.navigate(['/customer-dashboard']);
        } else if (role === 'EMPLOYEE') {
          this.router.navigate(['/employee-dashboard']);
        } else {
          // Fallback to home if role cannot be determined
          this.errorMessage = 'Unable to determine user role. Please contact support.';
          this.jwtTokenStorage.removeToken();
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage =
          error.error?.message || 'Invalid username or password';
        console.error('Login error:', error);
      },
    });
  }
}
