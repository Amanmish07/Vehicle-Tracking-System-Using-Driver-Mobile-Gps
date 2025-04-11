import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehicles: any[] = [];

  addVehicle(vehicle: any) {
    this.vehicles.push(vehicle);
  }

  deleteVehicle(registration: string) {
    this.vehicles = this.vehicles.filter(v => v.registration !== registration);
  }

  getAllVehicles(): any[] {
    return this.vehicles;
  }
}
