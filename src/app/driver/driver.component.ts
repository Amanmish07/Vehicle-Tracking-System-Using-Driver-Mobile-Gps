import { Component } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {
  driverId: string = '';
  location: string = ''; // Placeholder for driver location
  isTracking: boolean = false;

  constructor() {
    // Example: You might retrieve the driver ID from a service after login
    this.driverId = this.getDriverIdFromService();
  }

  getDriverIdFromService(): string {
    // Replace this with actual logic to retrieve the driver ID
    return 'DRIVER123';
  }

  startTracking() {
    // Logic to start GPS tracking
    this.isTracking = true;
    console.log('Tracking started for Driver ID:', this.driverId);
    // You can add logic to get the driver's location
  }

  stopTracking() {
    // Logic to stop GPS tracking
    this.isTracking = false;
    console.log('Tracking stopped for Driver ID:', this.driverId);
  }
}
