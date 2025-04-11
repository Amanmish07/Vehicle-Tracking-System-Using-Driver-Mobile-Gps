import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-view-all-vehicles',
  template: `
    <h2>All Vehicles</h2>
    <table *ngIf="vehicles.length > 0; else noData">
      <tr>
        <th>Registration</th>
        <th>Model</th>
        <th>Driver</th>
      </tr>
      <tr *ngFor="let v of vehicles">
        <td>{{ v.registration }}</td>
        <td>{{ v.model }}</td>
        <td>{{ v.driver }}</td>
      </tr>
    </table>
    <ng-template #noData>No vehicles found.</ng-template>
  `,
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./view-all-vehicles.component.css']
})
export class ViewAllVehiclesComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicles = this.vehicleService.getAllVehicles();
  }
}
