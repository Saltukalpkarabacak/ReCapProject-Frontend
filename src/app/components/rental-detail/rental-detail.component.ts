import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Card } from 'src/app/models/card';
import { Rental } from 'src/app/models/rental';
import { RentalCrud } from 'src/app/models/rentalCrud';
import { CarService } from 'src/app/services/car.service';
import { CardService } from 'src/app/services/card.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  //-card models-
  name:string;
  cardNo:string;
  month:number;
  year:number;
  cvv:number;

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
    private cardService:CardService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarsById(params["carId"]);
      this.CurrentCarId=params["carId"];
      console.log(this.CurrentCarId)
    });
  }

 getRentalsDateControl(){
    this.rentalService.getRentalsDateControl(this.CurrentCarId,this.SelectedRentDate).subscribe((response) => {
      this.CurrentRental = response.data;
      if(this.CurrentRental.length>=1){
        this.toastrService.error("The Car was rented on these dates")
      }else{
        this.toastrService.success("Dates are available")
      }
    });
  }

  add(){
    let rental:RentalCrud={
      carId:Number(this.CurrentCarId),
      customerId:1003,
      rentDate:this.SelectedRentDate,
      returnDate:this.SelectedReturnDate
    };
    
   this.rentalService.add(rental).subscribe(response=>{
      this.toastrService.success("Car rented")
    }
    );
  }

  isCardExist(){
    let card:Card={
      name:this.name,
      cardNo:this.cardNo,
      month:Number(this.month),
      year:Number(this.year),
      cvv:Number(this.cvv)
    }
    this.cardService.isCardExist(card).subscribe(response=>{
      if(!response.success){
        this.toastrService.error("Creditcard not exist")
      }else{
        this.add();
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
