import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
  export class RegisterComponent implements OnInit {
  form: FormGroup
  submitted = false;
 admin: any
 fileToUpload:Array<File>=[];
  constructor(private formBuilder: FormBuilder, private registernservice: LoginService, private route: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      fullname: ['', Validators.required],
      password: ['', Validators.required],
      
      phone: ['', Validators.required],

    })
  }
 
  handleFileInput(files:any){
    this.fileToUpload=<Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }
  registeradmin() {
   
  let formdata=new FormData();
  formdata.append("email",this.form.value.email)
  formdata.append("password",this.form.value.password)
  formdata.append("fullname",this.form.value.fullname)
  formdata.append("phone",this.form.value.phone)
  formdata.append("photo",this.fileToUpload[0])
  this.registernservice.register(formdata).subscribe((res:any)=>{
  console.log(res)
  this.route.navigateByUrl('/')

  })
}
  }