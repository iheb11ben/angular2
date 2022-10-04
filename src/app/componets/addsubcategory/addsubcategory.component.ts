import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';
import { SubcategoryService } from 'src/app/service/subcategory.service';

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent implements OnInit {
  submitted= false;
  form:FormGroup
  listcategory:any
  constructor(private formBuilder: FormBuilder,private subcategoryservice:SubcategoryService,private categoryservice:CategoryService) {}

  ngOnInit(): void {
    this.getallcategory()
    this.form=this.formBuilder.group({
      name: ['', Validators.required],
      description: ['',Validators.required ],
      category: ['',Validators.required ],
      

    })
  }
  get f() {
    return this.form.controls;
  }
  Add(): void {
    console.log("bnj")
    this.submitted = true;


this.subcategoryservice.createsubcategory(this.form.value).subscribe((res:any)=>{
  console.log(res);})

}

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  getallcategory(){
    this.categoryservice.getcategory().subscribe((res: any) => {
      this.listcategory=res["data"]
      console.log("list of category",this.listcategory)
    })
  }
}