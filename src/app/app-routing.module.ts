import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandDeleteDetailComponent } from './components/brand-delete-detail/brand-delete-detail.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { BrandUpdateDetailComponent } from './components/brand-update-detail/brand-update-detail.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDeleteDetailComponent } from './components/car-delete-detail/car-delete-detail.component';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { CarUpdateDetailComponent } from './components/car-update-detail/car-update-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorDeleteDetailComponent } from './components/color-delete-detail/color-delete-detail.component';
import { ColorDeleteComponent } from './components/color-delete/color-delete.component';
import { ColorUpdateDetailComponent } from './components/color-update-detail/color-update-detail.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path: "",pathMatch:"full",component:CarComponent},
  {path:"cars" ,component:CarComponent },
  {path:"cars/add" ,component:CarAddComponent },
  {path:"cars/delete" ,component:CarDeleteComponent },
  {path:"cars/delete/:carId" ,component:CarDeleteDetailComponent },
  {path:"cars/update" ,component:CarUpdateComponent},
  {path:"cars/update/:carId " ,component:CarUpdateDetailComponent},
  {path:"brands/add" ,component:BrandAddComponent },
  {path:"brands/update" ,component:BrandUpdateComponent },
  {path:"brands/update/:brandId" ,component:BrandUpdateDetailComponent },
  {path:"brands/delete" ,component:BrandDeleteComponent },
  {path:"brands/delete/:brandId" ,component:BrandDeleteDetailComponent },
  {path:"cars/brand/:brandId" ,component:CarComponent },
  {path:"cars/color/:colorId" ,component:CarComponent },
  {path:"colors/add" ,component:ColorAddComponent},
  {path:"colors/delete" ,component:ColorDeleteComponent},
  {path:"colors/delete/:colorId" ,component:ColorDeleteDetailComponent},
  {path:"colors/update" ,component:ColorUpdateComponent},
  {path:"colors/update/:colorId" ,component:ColorUpdateDetailComponent},
  {path:"cars/:carId" ,component:CarDetailComponent},
  {path:"filter/:colorId/:brandId" ,component:CarFilterComponent},
  {path:"filter" ,component:CarFilterComponent},
  {path:"rental/:carId" ,component:RentalDetailComponent},
  {path:"rental" ,component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
