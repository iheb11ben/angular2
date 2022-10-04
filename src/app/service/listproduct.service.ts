import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListproductService {

  constructor(private  http:HttpClient) { }
  getproduct(){
    return this.http.get(`${environment.baseurl}/Product/allProduct`)
  }
  deleteproduct(id:any){
    return this.http.delete(`${environment.baseurl}/Product/deleteProduct/${id}`)
  }
  createproduct(product:any){
    return this.http.post(`${environment.baseurl}/product/createProduct`,product)

}
}
