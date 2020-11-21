import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { ClothesCartComponent } from './clothes-cart/clothes-cart.component';
import { FormsModule} from '@angular/forms';
import { AmsterdamContactComponent } from './amsterdam-contact/amsterdam-contact.component';
import { AmsterdamClothesComponent } from './amsterdam-clothes/amsterdam-clothes.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    ClothesCartComponent,
    AmsterdamContactComponent,
    AmsterdamClothesComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
