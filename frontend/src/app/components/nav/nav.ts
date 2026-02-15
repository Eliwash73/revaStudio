import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css'],
})
export class NavComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  // Expose auth service to template
  userRole = this.authService.getUserRole();
  isAuthenticated = this.authService.getAuthStatus();

  isCustomer(): boolean {
    return this.authService.isCustomer();
  }

  isEmployee(): boolean {
    return this.authService.isEmployee();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
