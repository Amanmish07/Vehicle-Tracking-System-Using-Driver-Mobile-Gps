import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../Model/User';

@Component({
  selector: 'app-admin-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent {
 
  formData : User = {
    name : '',
    phoneNumber :'',
    password: '',
    confirmPassword :'',
    email :'',
    username : '',
    role : ''
  }

  constructor(private router: Router) {}

  onRegisterSubmit() {
    // Check if password and confirm password match
    if (this.formData.password !== this.formData.confirmPassword) {
      alert("Passwords do not match! Please try again.");
      return; // Stop the registration process
    }

    // Implement your registration logic here
    console.log('Register:', this.formData.name, this.formData.phoneNumber, this.formData.password);

    // Simulate registration success
    // this.registrationSuccess = true;

    // Show confirmation prompt
    const proceedToLogin = confirm("Registration successful! Would you like to go to the admin login?");
    
    if (proceedToLogin) {
      this.router.navigate(['/admin-login']); // Redirect to admin login
    }
  }
}
