import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44314/api';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + '/cars/getcarsdetails';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + '/cars/getcarsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + '/cars/getcarsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsById(carId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + '/cars/getcarsdetailbyid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
