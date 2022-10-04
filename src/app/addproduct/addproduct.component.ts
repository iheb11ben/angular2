import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ListproductService } from '../service/listproduct.service';
import { SubcategoryService } from '../service/subcategory.service';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  submitted= false;
  form:FormGroup
  listsubcategory:any
  myFiles:string[]=[];
  constructor(private formBuilder: FormBuilder,private productervice:ListproductService,private subcategoryservice:SubcategoryService) {}

  ngOnInit(): void {
    this.getallsubcategory()
    this.form=this.formBuilder.group({
      ref: ['', Validators.required],
      description: ['',Validators.required ],
      price: ['',Validators.required ],
      qte: ['',Validators.required ],
      Subcategory: ['',Validators.required ],
      

    })
  }
  onFileChange(event:any){
    for (var i=0; i< event.target.files.length;i++){
      this.myFiles.push(event.target.files[i]);
    }
  }
  get f() {
    return this.form.controls;
  }
  onSubmit(): void {
    console.log("bnj")
    this.submitted = true;

  let formdata=new FormData();
  formdata.append("name",this.form.value.name);
  formdata.append("price",this.form.value.price);
  formdata.append("ref",this.form.value.ref);
  formdata.append("qte",this.form.value.qte);
  formdata.append("Subcategory",this.form.value.Subcategory);


for (var i=0 ;i<this.myFiles.length;i++){
formdata.append("photos",this.myFiles[i])
}

this.productervice.createproduct(formdata).subscribe((res:any)=>{
  console.log(res);})

}

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  getallsubcategory(){
    this.subcategoryservice.getsubcategory().subscribe((res: any) => {
      this.listsubcategory=res["data"]
      console.log("list of subcategory",this.listsubcategory)
    })
  }
}