import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { CarComponent } from './components/car/car.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';

const routes: Routes = [
  {path: "",pathMatch:"full",component:CarComponent},
  {path:"cars" ,component:CarComponent },
  {path:"cars/brand/:brandId" ,component:CarComponent },
  {path:"cars/color/:colorId" ,component:CarComponent },
  {path:"cars/:carId" ,component:CarDetailComponent},
  {path:"filter/:colorId/:brandId" ,component:CarFilterComponent},
  {path:"filter" ,component:CarFilterComponent},
  {path:"rental/:carId" ,component:RentalDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
