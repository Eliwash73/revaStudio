import { Injectable, signal } from '@angular/core';
import { JwtDecoder } from './jwt-decoder';
import { JwtTokenStorage } from './jwt-token-storage';

export type UserRole = 'CUSTOMER' | 'EMPLOYEE' | null;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private userRole = signal<UserRole>(null);
  private isAuthenticated = signal<boolean>(false);

  constructor(
    private jwtDecoder: JwtDecoder,
    private jwtTokenStorage: JwtTokenStorage
  ) {
    this.initializeAuth();
  }

  /**
   * Initialize authentication state from stored token
   */
  private initializeAuth(): void {
    const token = this.jwtTokenStorage.getToken();
    if (token && !this.jwtDecoder.isTokenExpired(token)) {
      const role = this.jwtDecoder.getRole(token) as UserRole;
      this.userRole.set(role);
      this.isAuthenticated.set(true);
    }
  }

  /**
   * Get current user's role as a signal
   * @returns Signal containing current user role
   */
  getUserRole() {
    return this.userRole.asReadonly();
  }

  /**
   * Get current user's role synchronously
   * @returns Current user role
   */
  getCurrentRole(): UserRole {
    return this.userRole();
  }

  /**
   * Get authentication status as a signal
   * @returns Signal containing authentication status
   */
  getAuthStatus() {
    return this.isAuthenticated.asReadonly();
  }

  /**
   * Check if user is authenticated
   * @returns True if authenticated, false otherwise
   */
  isUserAuthenticated(): boolean {
    return this.isAuthenticated();
  }

  /**
   * Set user as authenticated with a specific role
   * @param token JWT token
   */
  setAuthenticated(token: string): void {
    const role = this.jwtDecoder.getRole(token) as UserRole;
    this.userRole.set(role);
    this.isAuthenticated.set(true);
  }

  /**
   * Clear authentication state (logout)
   */
  logout(): void {
    this.jwtTokenStorage.removeToken();
    this.userRole.set(null);
    this.isAuthenticated.set(false);
  }

  /**
   * Check if user has a specific role
   * @param role Role to check
   * @returns True if user has the role
   */
  hasRole(role: UserRole): boolean {
    return this.userRole() === role;
  }

  /**
   * Check if user is a customer
   * @returns True if user is a customer
   */
  isCustomer(): boolean {
    return this.userRole() === 'CUSTOMER';
  }

  /**
   * Check if user is an employee
   * @returns True if user is an employee
   */
  isEmployee(): boolean {
    return this.userRole() === 'EMPLOYEE';
  }
}
