import { Component } from '@angular/core';
import { UserServiceService } from '../../Service/user-service.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink , CommonModule , FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage = '';
  
  // email= ''
  // password=''
  // errorMessage: string = ''


  constructor(private readonly userService : UserServiceService ,private readonly router : Router){}
  
   
  async onSubmit() {

    if (!this.email || !this.password) {
      this.showError("Email and Password is required");
      return
    }

    try {
      console.log("Admin email : " , this.email);
    console.log("Admin password : " , this.password);

      const response = await this.userService.login(this.email, this.password);
      if(response.statusCode == 200){
        // localStorage.setItem('token', response.token)
        localStorage.setItem('role', response.role)
        console.log("Admin Role is : " , response.role);

        if(response.role === "ADMIN"){
          this.router.navigate(['/admin-dashboard']);
        } if(response.role == 'DRIVER'){
        this.router.navigate(['/driver-dashboard']);
        }
      }else{
        this.showError(response.message)
      }
    } catch (error: any) {
      this.showError(error.message)
    }

  }

  showError(mess: string) {
    // this.errorMessage = mess;
    this.errorMessage = 'Failed your connection during the login operation...';

    setTimeout(() => {
      this.errorMessage = ''
    }, 3000)
  }
}
