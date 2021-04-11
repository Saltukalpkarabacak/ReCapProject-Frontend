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
import { LoginComponent } from './components/login/login.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: "",pathMatch:"full",component:CarComponent,canActivate:[LoginGuard]},
  {path:"cars" ,component:CarComponent ,canActivate:[LoginGuard]},
  {path:"login" ,component:LoginComponent },
  {path:"cars/add" ,component:CarAddComponent,canActivate:[LoginGuard] },
  {path:"cars/delete" ,component:CarDeleteComponent ,canActivate:[LoginGuard] },
  {path:"cars/delete/:carId" ,component:CarDeleteDetailComponent ,canActivate:[LoginGuard] },
  {path:"cars/update" ,component:CarUpdateComponent,canActivate:[LoginGuard] },
  {path:"cars/update/:carId " ,component:CarUpdateDetailComponent,canActivate:[LoginGuard] },
  {path:"brands/add" ,component:BrandAddComponent ,canActivate:[LoginGuard] },
  {path:"brands/update" ,component:BrandUpdateComponent ,canActivate:[LoginGuard] },
  {path:"brands/update/:brandId" ,component:BrandUpdateDetailComponent,canActivate:[LoginGuard]  },
  {path:"brands/delete" ,component:BrandDeleteComponent ,canActivate:[LoginGuard] },
  {path:"brands/delete/:brandId" ,component:BrandDeleteDetailComponent,canActivate:[LoginGuard]  },
  {path:"cars/brand/:brandId" ,component:CarComponent ,canActivate:[LoginGuard] },
  {path:"cars/color/:colorId" ,component:CarComponent ,canActivate:[LoginGuard] },
  {path:"colors/add" ,component:ColorAddComponent,canActivate:[LoginGuard] },
  {path:"colors/delete" ,component:ColorDeleteComponent,canActivate:[LoginGuard] },
  {path:"colors/delete/:colorId" ,component:ColorDeleteDetailComponent,canActivate:[LoginGuard] },
  {path:"colors/update" ,component:ColorUpdateComponent,canActivate:[LoginGuard] },
  {path:"colors/update/:colorId" ,component:ColorUpdateDetailComponent,canActivate:[LoginGuard] },
  {path:"cars/:carId" ,component:CarDetailComponent,canActivate:[LoginGuard] },
  {path:"filter/:colorId/:brandId" ,component:CarFilterComponent,canActivate:[LoginGuard] },
  {path:"filter" ,component:CarFilterComponent,canActivate:[LoginGuard] },
  {path:"rental/:carId" ,component:RentalDetailComponent,canActivate:[LoginGuard] },
  {path:"rental" ,component:RentalComponent,canActivate:[LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
