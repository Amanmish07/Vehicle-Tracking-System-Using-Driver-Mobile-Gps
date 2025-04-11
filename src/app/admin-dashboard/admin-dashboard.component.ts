import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  standalone: true
})
export class AdminDashboardComponent {
  adminName = 'Admin'; // You can replace this with dynamic name if available

  constructor(private router: Router) {}

  viewAllDrivers() {
    this.router.navigate(['/view-all-drivers']);
  }

  manageVehicle() {
    this.router.navigate(['/manage-vehicle']);
  }

  viewAllVehicles() {
    this.router.navigate(['/view-all-vehicles']);
  }

  addDriver() {
    this.router.navigate(['/add-driver']);
  }

  trackVehicle() {
    this.router.navigate(['/track-vehicle']);
  }

  driverPayment() {
    this.router.navigate(['/driver-payment']); // ✅ Route added
  }

  geofence() {
    this.router.navigate(['/geofence']); // ✅ Route added
  }

  navigateHome() {
    this.router.navigate(['/']);
  }

  logout() {
    this.router.navigate(['/admin-login']);
  }
}
