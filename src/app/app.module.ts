import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerAddComponent } from './component/adminPage/customer-add/customer-add.component';
import { CustomerDataComponent } from './component/adminPage/customer-data/customer-data.component';
import { RestaurantDataComponent } from './component/adminPage/restaurant-data/restaurant-data.component';
import { CartComponent } from './component/customerPage/cart/cart.component';
import { PaymentComponent } from './component/customerPage/payment/payment.component';
import { PaymentSuccessComponent } from './component/customerPage/payment-success/payment-success.component';
import { PreviousOrderCustomerComponent } from './component/customerPage/previous-order-customer/previous-order-customer.component';
import { QuantityComponent } from './component/customerPage/quantity/quantity.component';
import { ContactUsComponent } from './component/homePage/contact-us/contact-us.component';
import { ErrorComponent } from './component/homePage/error/error.component';
import { FooterComponent } from './component/homePage/footer/footer.component';
import { HelpusComponent } from './component/homePage/helpus/helpus.component';
import { HomeComponent } from './component/homePage/home/home.component';
import { LoginComponent } from './component/homePage/login/login.component';
import { LogoutComponent } from './component/homePage/logout/logout.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MenuComponent } from './component/homePage/menu/menu.component';
import { RegisterComponent } from './component/homePage/register/register.component';
import { ItemComponent } from './component/restaurantPage/item/item.component';
import { PreviousOrderrestaurantComponent } from './component/restaurantPage/previous-orderrestaurant/previous-orderrestaurant.component';
import { RegistereditemComponent } from './component/restaurantPage/registereditem/registereditem.component';
import { RestaurantRegistrationComponent } from './component/restaurantPage/restaurant-registration/restaurant-registration.component';
import { RestaurantSignupComponent } from './component/restaurantPage/restaurant-signup/restaurant-signup.component';
import { RestaurantdataEditComponent } from './component/restaurantPage/restaurantdata-edit/restaurantdata-edit.component';
import { RestaurantsComponent } from './component/restaurantPage/restaurants/restaurants.component';
import { UpdateItemComponent } from './component/restaurantPage/update-item/update-item.component';
import { FormsModule,NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { CustomerDataEditComponent } from './component/customerPage/customer-data-edit/customer-data-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerDataComponent,
    RestaurantDataComponent,
    CartComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    PreviousOrderCustomerComponent,
    CustomerDataEditComponent,
    QuantityComponent,
    ContactUsComponent,
    ErrorComponent,
    FooterComponent,
    HelpusComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    RegisterComponent,
    ItemComponent,
    PreviousOrderrestaurantComponent,
    RegistereditemComponent,
    RestaurantRegistrationComponent,
    RestaurantSignupComponent,
    RestaurantdataEditComponent,
    RestaurantsComponent,
    UpdateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
