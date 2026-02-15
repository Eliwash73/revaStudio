import { Injectable } from '@angular/core';

export interface JwtPayload {
  role: string;
  sub?: string;
  userId?: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class JwtDecoder {
  
  /**
   * Decode JWT token and extract payload
   * @param token JWT token string
   * @returns Decoded payload object
   */
  decodeToken(token: string | null): JwtPayload | null {
    if (!token) {
      return null;
    }

    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        console.error('Invalid JWT token format');
        return null;
      }

      // Decode the payload (second part)
      const payload = this.parseBase64(parts[1]);
      return payload as JwtPayload;
    } catch (error) {
      console.error('Failed to decode JWT token:', error);
      return null;
    }
  }

  /**
   * Get the role from JWT token
   * @param token JWT token string
   * @returns Role string or null if unable to extract
   */
  getRole(token: string | null): string | null {
    const payload = this.decodeToken(token);
    return payload?.role || null;
  }

  /**
   * Check if token is expired
   * @param token JWT token string
   * @returns True if token is expired, false otherwise
   */
  isTokenExpired(token: string | null): boolean {
    const payload = this.decodeToken(token);
    if (!payload || !payload['exp']) {
      return true;
    }

    const expirationTime = payload['exp'] * 1000; // Convert to milliseconds
    return Date.now() >= expirationTime;
  }

  /**
   * Parse base64 URL-safe string
   * @param base64String Base64 URL-safe encoded string
   * @returns Parsed object
   */
  private parseBase64(base64String: string): any {
    // Add padding if necessary
    let padding = 4 - (base64String.length % 4);
    if (padding !== 4) {
      base64String += '='.repeat(padding);
    }

    // Convert base64url to base64
    const base64 = base64String.replace(/-/g, '+').replace(/_/g, '/');

    // Decode base64
    const jsonString = atob(base64);

    // Parse JSON
    return JSON.parse(jsonString);
  }
}
