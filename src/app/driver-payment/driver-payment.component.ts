import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-driver-payment',
  templateUrl: './driver-payment.component.html',
  styleUrls: ['./driver-payment.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DriverPaymentComponent {
  driverId = '';
  driverName = '';
  salary = 0;
  dues = 0;
  paymentMode = 'UPI';
  driverFetched = false;
  salaryPaid = false;

  fetchDriverInfo() {
    // In real app, fetch from backend. For now, simulate:
    if (this.driverId === 'D123') {
      this.driverName = 'Rahul Sharma';
      this.salary = 20000;
      this.dues = 3000;
    } else {
      this.driverName = 'Unknown';
      this.salary = 0;
      this.dues = 0;
    }

    this.driverFetched = true;
    this.salaryPaid = false;
  }

  paySalary() {
    this.salaryPaid = true;
  }
}
