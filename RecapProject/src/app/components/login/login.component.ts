import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder,FormControl } from "@angular/forms";
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastService:ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  

  login(){
    if (this.loginForm.valid) {
      
      let loginModel = Object.assign({},this.loginForm.value)
      
      this.authService.login(loginModel).subscribe(response=>{
      localStorage.setItem('token',response.data.token);  
      
      },responseError=>{
        this.toastService.error(responseError.error);
      });
    }
  }

}
