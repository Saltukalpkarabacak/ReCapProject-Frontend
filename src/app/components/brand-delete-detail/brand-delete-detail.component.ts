import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-delete-detail',
  templateUrl: './brand-delete-detail.component.html',
  styleUrls: ['./brand-delete-detail.component.css']
})
export class BrandDeleteDetailComponent implements OnInit {

  brandDeleteForm: FormGroup;
  
  constructor(private formBuilder:FormBuilder,
    private brandService:BrandService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createBrandUpdateForm();
  }

  createBrandUpdateForm(){
    this.brandDeleteForm = this.formBuilder.group({
      id:["",Validators.required],
      name:["",Validators.required]
    });
  }

  delete(){
    if (this.brandDeleteForm.valid) {
      let brandModel= Object.assign({},this.brandDeleteForm.value);
      this.brandService.delete(brandModel).subscribe(response=>{
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
