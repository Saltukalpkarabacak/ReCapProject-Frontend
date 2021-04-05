import { Component, OnInit } from '@angular/core';

import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.css']
})
export class BrandDeleteComponent implements OnInit {

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
