import { Component } from '@angular/core';

@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './driver-dashboard.component.html',
  styleUrls: ['./driver-dashboard.component.css']
})
export class DriverDashboardComponent {
getAccess() {
throw new Error('Method not implemented.');
}
logout() {
throw new Error('Method not implemented.');
}
checkPaymentStatus() {
throw new Error('Method not implemented.');
}
approveLocation() {
throw new Error('Method not implemented.');
}
  isRideActive: boolean = false;

  startRide(): void {
    this.isRideActive = true;
    console.log('Ride started!');
  }

  stopRide(): void {
    this.isRideActive = false;
    console.log('Ride stopped!');
  }
}
