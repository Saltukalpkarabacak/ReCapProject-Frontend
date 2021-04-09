import { Component, OnInit } from '@angular/core';

import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

 

  brands:Brand[];



  constructor(private brandService:BrandService,) { }


    ngOnInit(): void {
      
      this.getBrands();
    }
  

   
    getBrands(){
      this.brandService.getBrands()
      .subscribe((response)=>{
        this.brands=response.data
      });
    }

   
  

}
