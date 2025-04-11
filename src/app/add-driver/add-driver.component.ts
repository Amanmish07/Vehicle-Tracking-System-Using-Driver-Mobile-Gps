import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DriverService } from '../services/driver.service'; // Import the service
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AddDriverComponent {
  driver = {
    id: 0,
    name: '',
    mobile: '',
    license: '',
    aadhar: '',
  };

  constructor(private router: Router, private driverService: DriverService) {}

  onSubmit() {
    this.driver.id = Date.now(); // Generate a simple unique ID
    this.driverService.addDriver(this.driver);
    alert('Driver added: ' + JSON.stringify(this.driver));
    this.router.navigate(['/admin-dashboard']);
  }
}
