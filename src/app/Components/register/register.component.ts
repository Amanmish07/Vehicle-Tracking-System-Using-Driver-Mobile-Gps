import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../../Service/user-service.service';
import { User } from '../../Model/User';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule ,RouterLink ,  FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formData : User = {
    name : '',
    phoneNumber :'',
    password: '',
    confirmPassword :'',
    email :'',
    username : '',
    role : ''
  }

  errorMessage=''

  constructor(private readonly _router : Router ,private readonly userService :UserServiceService ){}
  registerAdminDriver(){
 
      console.log("This is the register form data : " , this.formData);
      this.userService.createAdminOrDrever(this.formData).subscribe({
        next: (data) =>{
          console.log("User Created Successfully");
          console.log("User Created Successfully" , this.formData);
          window.location.reload();
        } ,
        error: (error) => {
          console.error("Error while creating employee", error);
        }
      })
    
  }





}
