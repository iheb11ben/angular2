import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {


    submitted= false;
    form:FormGroup
    listcategory:any
    constructor(private formBuilder: FormBuilder,private categoryservice:CategoryService) {}
  
    ngOnInit(): void {
      this.getallcategory()
      this.form=this.formBuilder.group({
        name: ['', Validators.required],
        description: ['',Validators.required ],
        
        
  
      })
    }
    get f() {
      return this.form.controls;
    }
    Addc(): void {
      console.log("bnj")
      this.submitted = true;
  
  
  this.categoryservice.createcategory(this.form.value).subscribe((res:any)=>{
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