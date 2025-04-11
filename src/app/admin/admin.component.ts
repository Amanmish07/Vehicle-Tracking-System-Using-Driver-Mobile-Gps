import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [NgIf, FormsModule]
})
export class AdminComponent {
  adminPassword: string = '';

  onSubmit() {
    if (this.adminPassword === 'your-admin-password') {
      alert('Admin access granted');
    
    } else {
      alert('Incorrect password');
    }
  }
}
