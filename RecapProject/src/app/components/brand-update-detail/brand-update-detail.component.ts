import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update-detail',
  templateUrl: './brand-update-detail.component.html',
  styleUrls: ['./brand-update-detail.component.css']
})
export class BrandUpdateDetailComponent implements OnInit {

  brandUpdateForm: FormGroup;
  
  constructor(private formBuilder:FormBuilder,
    private brandService:BrandService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm(){
    this.brandUpdateForm = this.formBuilder.group({
      id:["",Validators.required],
      name:["",Validators.required]
    });
  }

  update(){
    if (this.brandUpdateForm.valid) {
      let brandModel= Object.assign({},this.brandUpdateForm.value);
      this.brandService.update(brandModel).subscribe(response=>{
        this.toastrService.success(response.message,"Successfully saved")
      },responseError=>{
        if (responseError.error.Errors.length>0) {
          for (let i =0;  i< responseError.error.Errors.length;i++) {
            
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,
              "Verification error")
          }
        }
      });
     
    } else {
      this.toastrService.error("Your form is missing","Warning")
    }
  }

}
