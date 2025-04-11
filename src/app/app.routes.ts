import { Routes } from '@angular/router';

// 🏠 Core Pages
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// 👤 Admin Components
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { ViewAllDriversComponent } from './view-all-drivers/view-all-drivers.component';
import { DriverPaymentComponent } from './driver-payment/driver-payment.component'; // ✅ New

// 🚗 Driver Components
import { DriverLoginComponent } from './driver-login/driver-login.component';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';

// 📦 Vehicle Management
import { ManageVehicleComponent } from './manage-vehicle/manage-vehicle.component';
import { ViewAllVehiclesComponent } from './view-all-vehicles/view-all-vehicles.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { DeleteVehicleComponent } from './delete-vehicle/delete-vehicle.component';

// 📍 Tracking
import { TrackVehicleComponent } from './track-vehicle/track-vehicle.component';
import { TrackErrorComponent } from './track-error/track-error.component'; // ✅ Added

// 🔐 Authentication Components
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

export const routes: Routes = [
  // Home
  { path: '', component: HomeComponent },

  // Admin
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-register', component: AdminRegistrationComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'add-driver', component: AddDriverComponent },
  { path: 'view-all-drivers', component: ViewAllDriversComponent },
  { path: 'driver-payment', component: DriverPaymentComponent }, // ✅ New route

  // Driver
  { path: 'driver-login', component: DriverLoginComponent },
  { path: 'driver-dashboard', component: DriverDashboardComponent },

  // Auth
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Tracking
  { path: 'track-vehicle', component: TrackVehicleComponent },
  { path: 'track-error', component: TrackErrorComponent }, // ✅ Google Maps error fallback

  // Vehicle Management
  { path: 'manage-vehicle', component: ManageVehicleComponent },
  { path: 'view-all-vehicles', component: ViewAllVehiclesComponent },
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'delete-vehicle', component: DeleteVehicleComponent },

  // Extras
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },

  // Fallback
  { path: '**', redirectTo: '' }
];
