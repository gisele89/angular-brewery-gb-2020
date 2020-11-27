import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ClothesCartService } from '../clothes-cart.service';
import { Clothes } from '../clothes-list/Clothes';

@Component({
  selector: 'app-clothes-cart',
  templateUrl: './clothes-cart.component.html',
  styleUrls: ['./clothes-cart.component.scss']
})
export class ClothesCartComponent implements OnInit {

  cartList$: Observable<Clothes[]>;
  constructor(private cart: ClothesCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
