import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private  http:HttpClient) { }
  getsubcategory(){
    return this.http.get(`${environment.baseurl}/SubCategory/allSubCategory`)
  }
  deletesubcategory(id:any){
    return this.http.delete(`${environment.baseurl}/SubCategory/deleteSubCategory/${id}`)
  }
  createsubcategory(subcategory:any){
    return this.http.post(`${environment.baseurl}/Subcategory/createSubCategory`,subcategory)

}
}
