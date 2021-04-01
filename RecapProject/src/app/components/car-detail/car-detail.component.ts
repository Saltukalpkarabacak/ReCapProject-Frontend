import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CartService } from 'src/app/services/cart.service';
import { RentalService } from 'src/app/services/rental.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  
  cars: Car[] = [];
  rentals:Rental[]=[];
  rentDetail=false;
  imageBasePath = environment.baseUrl;

  constructor( private carService: CarDetailService,
    private rentalService:RentalService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
    this.getCarsById(params['carId']);
    this.getRentals();
    });
  }

  getCarsById(carId: number) {
    this.carService.getCarsById(carId).subscribe((response) => {
      this.cars = response.data;
     });
  }

  getRentals(){
    this.rentalService.getRentals()
    .subscribe((response)=>{
      this.rentals=response.data;
    }); 
  }

  setRentDetail(){
    this.rentDetail=true;
  }

  

  addToCart(car:Car){
    this.toastrService.success("Sepete eklendi",car.brandName+"-"+car.colorName)
    this.cartService.addToCart(car);
  }
}

