import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {

  cars: Car[] = [];
  imageBasePath = environment.baseUrl;

constructor( private carService: CarService) { }

ngOnInit(): void {
  this.getCars();
}

getCars() {
  this.carService.getCars().subscribe((response) => {
    this.cars = response.data;
  });
}

}
