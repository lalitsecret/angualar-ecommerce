import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetailsComponent } from './pages/details/details.component';
import { LeftComponent } from './common/components/left/left.component';
import { RightComponent } from './common/components/right/right.component';
import { ProductsComponent } from './common/components/products/products.component';
import { ItemComponent } from './common/components/item/item.component';
import { FiltersComponent } from './common/components/filters/filters.component';
import { RatingComponent } from './common/components/rating/rating.component';
import { TblDirective } from './directives/tbl.directive';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ColPipe } from './pipes/col.pipe';
import { TagnamePipe } from './pipes/tagname.pipe';


const app:Routes=[
  {path:"",component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    OrdersComponent,
    CheckoutComponent,
    LogoutComponent,
    ProfileComponent,
    DetailsComponent,
    LeftComponent,
    RightComponent,
    ProductsComponent,
    ItemComponent,
    FiltersComponent,
    RatingComponent,
    TblDirective,
    SearchPipe,
    SortPipe,
    ColPipe,
    TagnamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(app),
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
