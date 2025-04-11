import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-vehicle',
  template: `
    <div class="vehicle-buttons">
      <button (click)="navigateToAdd()">Add Vehicle</button>
      <button (click)="navigateToDelete()">Delete Vehicle</button>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./manage-vehicle.component.css']
})
export class ManageVehicleComponent {
  constructor(private router: Router) {}

  navigateToAdd() {
    this.router.navigate(['/add-vehicle']);
  }

  navigateToDelete() {
    this.router.navigate(['/delete-vehicle']);
  }
}
