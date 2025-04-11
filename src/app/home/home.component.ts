import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  // Navigation methods for top buttons
  navigateHome() {
    this.router.navigate(['/']); // Navigates to the home page
  }

  navigateAbout() {
    this.router.navigate(['/about']); // Navigates to the about page
  }

  navigateContact() {
    this.router.navigate(['/contact']); // Navigates to the contact page
  }

  // Navigation methods for admin and driver options
  // navigateToAdminLogin() {
  //   this.router.navigate(['/admin-login']);
  // }
  // Navigation methods for admin and driver options
  navigateToAdminLogin() {
    this.router.navigate(['/login']);
  }

  // navigateToDriverLogin() {
  //   this.router.navigate(['/driver-login']);
  // }

  navigateToAdminRegistration() {
    this.router.navigate(['register']);
  }
}
