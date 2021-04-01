import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
 
  apiUrl="https://localhost:44314/api/rentals/";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "getrentalsdetails" ;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }

  getRentalsById(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "getrentalsdetailsbyid?carId=" + carId ;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }

  getRentalsDateControl(carId:number,rentDate:Date):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "getrentalsdetailsdatecontrol?carId=" + carId +"&rentDate=" +rentDate ;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }
}
