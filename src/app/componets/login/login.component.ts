import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  submitted = false;
  login: any
  constructor(private formBuilder: FormBuilder, private loginservice: LoginService,private route: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  logins() {
    this.loginservice.login(this.form.value).subscribe((res: any) => {
      console.log(res);
    
    if (res.success === true) {
      localStorage.setItem('userconnect', JSON.stringify(res.user))
      localStorage.setItem('token', res.token)
      localStorage.setItem("state", "0")
      this.route.navigateByUrl('/home')
    }
},
err => {
  Swal.fire({           //npm i sweetalert2
    icon: 'error',
    title: 'user not found',
    text: 'email invalid',
    footer: 'password invalid'
  })
  console.log(err)
}
    )
}
}
