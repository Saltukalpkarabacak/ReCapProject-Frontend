import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-delete-detail',
  templateUrl: './color-delete-detail.component.html',
  styleUrls: ['./color-delete-detail.component.css']
})
export class ColorDeleteDetailComponent implements OnInit {

  colorDeleteForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createColorUpdateForm();
  }

  createColorUpdateForm(){
    this.colorDeleteForm = this.formBuilder.group({
      id:["",Validators.required],
      name:["",Validators.required]
    });
  }

  delete(){
    if (this.colorDeleteForm.valid) {
      let colorModel= Object.assign({},this.colorDeleteForm.value);
      this.colorService.delete(colorModel).subscribe(response=>{
        
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
