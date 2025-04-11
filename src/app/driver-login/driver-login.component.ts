import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-driver-login',
  standalone: true,
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.css'],
  imports: [FormsModule] // Include FormsModule here
})
export class DriverLoginComponent {
  driverId: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    const validDriverId = 'driver123'; // Placeholder ID
    const validPassword = 'password123'; // Placeholder password

    if (this.driverId === validDriverId && this.password === validPassword) {
      alert('Login successful! Redirecting to Driver Dashboard...');
      this.router.navigate(['/driver-dashboard']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
