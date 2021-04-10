import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { UserComponent } from './components/user/user.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { VatAddeedPipe } from './pipes/vat-addeed.pipe';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';

import { ToastrModule } from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandUpdateDetailComponent } from './components/brand-update-detail/brand-update-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarUpdateDetailComponent } from './components/car-update-detail/car-update-detail.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorUpdateDetailComponent } from './components/color-update-detail/color-update-detail.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { BrandDeleteDetailComponent } from './components/brand-delete-detail/brand-delete-detail.component';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';
import { CarDeleteDetailComponent } from './components/car-delete-detail/car-delete-detail.component';
import { ColorDeleteComponent } from './components/color-delete/color-delete.component';
import { ColorDeleteDetailComponent } from './components/color-delete-detail/color-delete-detail.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    UserComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    CustomerComponent,   
    VatAddeedPipe,
    CarDetailComponent,
    FilterPipePipe,
    FilterColorPipe,
    FilterBrandPipe,
    CarFilterComponent,
    RentalDetailComponent,
    CartSummaryComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    BrandUpdateComponent,
    BrandUpdateDetailComponent,
    CarUpdateComponent,
    CarUpdateDetailComponent,
    ColorUpdateComponent,
    ColorUpdateDetailComponent,
    BrandDeleteComponent,
    BrandDeleteDetailComponent,
    CarDeleteComponent,
    CarDeleteDetailComponent,
    ColorDeleteComponent,
    ColorDeleteDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
