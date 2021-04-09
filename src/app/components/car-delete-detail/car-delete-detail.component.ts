import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-delete-detail',
  templateUrl: './car-delete-detail.component.html',
  styleUrls: ['./car-delete-detail.component.css']
})
export class CarDeleteDetailComponent implements OnInit {

  carDeleteForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCarUpdateForm();
  }

  createCarUpdateForm(){
    this.carDeleteForm = this.formBuilder.group({
      id:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    });
  }

  delete(){
    if (this.carDeleteForm.valid) {
      let carModel= Object.assign({},this.carDeleteForm.value);
      this.carService.delete(carModel).subscribe(response=>{
        
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
