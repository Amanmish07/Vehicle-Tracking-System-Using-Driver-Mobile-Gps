import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-error',
  templateUrl: './track-error.component.html',
  styleUrls: ['./track-error.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TrackErrorComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/admin-dashboard']);
  }
}
