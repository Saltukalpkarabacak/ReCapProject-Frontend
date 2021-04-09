import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  apiUrl = 'https://localhost:44314/api';
  brands: Brand[] = [];
  colors: Color[] = [];
  cars:Car[];
  brandFilter: number;
  colorFilter: number;
  currentCar:Car;
  imageBasePath = environment.baseUrl;

  constructor(
    private brandService: BrandService,
    private colorService: ColorService,
    private carService:CarService,
    private activatedRoute: ActivatedRoute
  ) {}
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["colorId"] && params["brandId"]){
        this.getCarsByColorIdbrandId(params["brandId"],params["colorId"]);
      }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }
      else {
        this.getCars();
      }
    });
    this.getBrands();
    this.getColors();
  }

  getCars(){
    this.carService.getCars().subscribe((response)=>{
      this.cars=response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
     
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
     
    });
  }

  getCarsByColorIdbrandId(colorId:number,brandId:number){
    this.carService.getCarsByColorIdBrandId(colorId,brandId).subscribe((response)=>{
      this.cars=response.data;
    });
  } 

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
     
    });
  }
  setCurrentCar(car:Car){
    this.currentCar=car;
 }
  getSelectedBrand(brandId: Number) {
    this.brandFilter == brandId;
      
  }
  getSelectedColor(colorId: Number) {
    this.colorFilter == colorId;
     
  }


}
