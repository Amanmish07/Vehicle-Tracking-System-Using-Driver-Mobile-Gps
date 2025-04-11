import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-delete-vehicle',
  template: `
    <h2>Delete Vehicle</h2>
    <form (ngSubmit)="onDelete()" #deleteForm="ngForm">
      <input type="text" [(ngModel)]="registration" name="registration" placeholder="Enter Registration No." required>
      <button type="submit">Delete</button>
    </form>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./delete-vehicle.component.css']
})
export class DeleteVehicleComponent {
  registration = '';

  constructor(private vehicleService: VehicleService, private router: Router) {}

  onDelete() {
    this.vehicleService.deleteVehicle(this.registration);
    alert('Vehicle Deleted!');
    this.router.navigate(['/admin-dashboard']);
  }
}
