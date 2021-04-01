import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  CurrentRental:Rental[];
  cars:Car[];
  Cost:number;
  CurrentCarId:number;
  SelectedRentDate:Date;
  SelectedReturnDate:Date;
  TotalPrice:number;
  
  constructor(private activatedRoute: ActivatedRoute,
    private rentalService:RentalService,
    private carService:CarService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.CurrentCarId=params["carId"];
      this.getCarsById(params["carId"]);
      console.log(this.Cost)
    });
  }

 getRentalsDateControl(){
    this.rentalService.getRentalsDateControl(this.CurrentCarId,this.SelectedRentDate).subscribe((response) => {
      this.CurrentRental = response.data;
      console.log(this.CurrentRental);
      if(this.CurrentRental.length>=1){
        this.toastrService.error("Araba bu tarihlerde kiralanmış")
      }else{
        this.toastrService.success("Araba kiralandı")
      }
    });
  }

  getCarsById(carId: number) {
    this.carService.getCarsById(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  setCost(cost:number){
    this.Cost=cost;
    this.caculateTotalPrice();
  }

  caculateTotalPrice(){
    let days =(new Date(this.SelectedReturnDate).getTime() - new Date(this.SelectedRentDate).getTime()) / 86400000;
    this.TotalPrice = days*this.Cost;
  }

}
