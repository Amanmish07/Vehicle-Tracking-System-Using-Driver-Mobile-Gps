import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DriverAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isDriverLoggedIn = sessionStorage.getItem('isDriverLoggedIn') === 'true';
    if (!isDriverLoggedIn) {
      this.router.navigate(['/driver-login']); // Redirect to login if not logged in
      return false;
    }
    return true; // Allow access if driver is logged in
  }
}
