import { Component } from '@angular/core';

@Component({
  selector: 'app-driver-tracking',
  templateUrl: './driver-tracking.component.html',
  styleUrls: ['./driver-tracking.component.css']
})
export class DriverTrackingComponent {
  isTracking: boolean = false;

  initiateTracking() {
    this.isTracking = true;
    // Here you would add logic to capture GPS coordinates and send them to the admin
    console.log('Tracking initiated... GPS coordinates will be sent to admin.');
  }
}
