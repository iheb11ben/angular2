import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from 'src/app/service/subcategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listsubcategory',
  templateUrl: './listsubcategory.component.html',
  styleUrls: ['./listsubcategory.component.css']
})
export class ListsubcategoryComponent implements OnInit {
  listsubcategory:any
  constructor (private subcategoryservice:SubcategoryService) { }
  
  ngOnInit(): void {
    this.getallsubcategory()
  }
  getallsubcategory(){
    this.subcategoryservice.getsubcategory().subscribe((res: any) => {
      this.listsubcategory = res["data"]
      console.log("list of Subcategory", this.listsubcategory)
    })
  }
  deletesubcategory(id: any) {
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
        this.subcategoryservice.deletesubcategory(id).subscribe((res: any) => {
          console.log(res)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.getallsubcategory()
        })
      }
    })


  }
 
}