import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ContactComponent {
  contactInfo = {
    name: '',
    number: '',
    email: '',
    problem: ''
  };

  onSubmit() {
    console.log("Contact Info Submitted:", this.contactInfo);
    alert("Your message has been submitted. We'll reach out shortly.");
    // You can add logic here to handle submission to a backend
  }
}
