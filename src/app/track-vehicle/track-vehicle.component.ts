import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track-vehicle',
  templateUrl: './track-vehicle.component.html',
  styleUrls: ['./track-vehicle.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TrackVehicleComponent {
  driverId: string = '';
  vehicleNumber: string = '';

  constructor(private router: Router) {}

  onTrack() {
    // You can optionally validate credentials here before redirecting.
    alert(`Unable to track vehicle: ${this.vehicleNumber} for Driver ID: ${this.driverId}.\nGoogle Maps API not configured.`);
    
    // Redirecting to custom error page
    this.router.navigate(['/track-error']);
  }
}
