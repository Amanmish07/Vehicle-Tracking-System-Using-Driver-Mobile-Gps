 // admin-login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminId: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // Method to handle form submission
  onSubmit(): void {
    // Placeholder for demo credentials, replace with real authentication if available
    const validAdminId = 'admin';
    const validPassword = 'password';

    if (this.adminId === validAdminId && this.password === validPassword) {
      // Redirect to the admin dashboard on successful login
      this.router.navigate(['/admin-dashboard']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
