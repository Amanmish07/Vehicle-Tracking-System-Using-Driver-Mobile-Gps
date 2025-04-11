import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private drivers: any[] = [];

  constructor() {}

  addDriver(driver: any) {
    this.drivers.push(driver);
  }

  getDrivers(): any[] {
    return this.drivers;
  }
}
