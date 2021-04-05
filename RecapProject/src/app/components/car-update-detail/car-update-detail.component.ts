import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car-update-detail',
  templateUrl: './car-update-detail.component.html',
  styleUrls: ['./car-update-detail.component.css']
})
export class CarUpdateDetailComponent implements OnInit {

  carUpdateForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCarUpdateForm();
  }

  createCarUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      id:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    });
  }

  update(){
    if (this.carUpdateForm.valid) {
      let carModel= Object.assign({},this.carUpdateForm.value);
      this.carService.update(carModel).subscribe(response=>{
        
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
