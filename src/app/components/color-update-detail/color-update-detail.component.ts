import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update-detail',
  templateUrl: './color-update-detail.component.html',
  styleUrls: ['./color-update-detail.component.css']
})
export class ColorUpdateDetailComponent implements OnInit {

  colorUpdateForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createColorUpdateForm();
  }

  createColorUpdateForm(){
    this.colorUpdateForm = this.formBuilder.group({
      id:["",Validators.required],
      name:["",Validators.required]
    });
  }

  update(){
    if (this.colorUpdateForm.valid) {
      let colorModel= Object.assign({},this.colorUpdateForm.value);
      this.colorService.update(colorModel).subscribe(response=>{
        
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
