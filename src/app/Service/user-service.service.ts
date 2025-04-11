import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private readonly _httpCliend : HttpClient) { }

  
  baseUrl:string = "http://localhost:8080";

  async login(email:string, password:string):Promise<any>{
    // const url = `${this.baseUrl}/auth/login`;
    try{
      const response = await this._httpCliend.post<any>(`${this.baseUrl}/user-login` , {email , password}).toPromise()
      return response;

    }catch(error){
      throw error;
    }
  }

  createAdminOrDrever(data : User){
    console.log("Admin or Driver data in service : " , data);
    return this._httpCliend.post(`${this.baseUrl}/register` , data);
  }

}
