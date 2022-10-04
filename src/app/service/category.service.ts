import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getcategory() {
    return this.http.get(`${environment.baseurl}/Category/allCategory`)
  }
  deletecategory(id: any) {
    return this.http.delete(`${environment.baseurl}/Category/deleteCategory/${id}`)
  }
  createcategory(category: any) {
    return this.http.post(`${environment.baseurl}/Category/createCategory`, category)

  }
}
