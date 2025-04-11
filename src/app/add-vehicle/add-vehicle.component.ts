import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  template: `
    <h2>Add Vehicle</h2>
    <form (ngSubmit)="onSubmit()" #vehicleForm="ngForm">
      <input type="text" [(ngModel)]="vehicle.registration" name="registration" placeholder="Registration No." required>
      <input type="text" [(ngModel)]="vehicle.model" name="model" placeholder="Model" required>
      <input type="text" [(ngModel)]="vehicle.driver" name="driver" placeholder="Driver Name" required>
      <button type="submit">Add</button>
    </form>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {
  vehicle = {
    registration: '',
    model: '',
    driver: ''
  };

  constructor(private vehicleService: VehicleService, private router: Router) {}

  onSubmit() {
    this.vehicleService.addVehicle(this.vehicle);
    alert('Vehicle Added!');
    this.router.navigate(['/admin-dashboard']);
  }
}
