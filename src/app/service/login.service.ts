import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  http:HttpClient) { }
 login(login:any){
    return this.http.post(`${environment.baseurl}/login`,login)
  }
  register(admin:any){
    return this.http.post(`${environment.baseurl}/registerAdmin`,admin)
  }
}

