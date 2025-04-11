import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-view-all-drivers',
  templateUrl: './view-all-drivers.component.html',
  styleUrls: ['./view-all-drivers.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ViewAllDriversComponent implements OnInit {
  drivers: any[] = [];

  constructor(private driverService: DriverService, private router: Router) {}

  ngOnInit() {
    this.drivers = this.driverService.getDrivers();
  }

  goBack() {
    this.router.navigate(['/admin-dashboard']);
  }
}
