import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {
  listcategory:any
  constructor (private categoryservice:CategoryService) { }
  
  ngOnInit(): void {
    this.getallcategory()
  }
  getallcategory(){
    this.categoryservice.getcategory().subscribe((res: any) => {
      this.listcategory = res["data"]
      console.log("list of category", this.listcategory)
    })
  }
  deletecategory(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryservice.deletecategory(id).subscribe((res: any) => {
          console.log(res)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.getallcategory()
        })
      }
    })


  }
 
}