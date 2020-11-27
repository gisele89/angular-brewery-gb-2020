import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clothes } from './clothes-list/Clothes';

@Injectable({
  providedIn: 'root'
})
export class ClothesCartService {
  // tslint:disable-next-line:variable-name
  private _cartList: Clothes[] = [];
  cartList: BehaviorSubject<Clothes[]> = new BehaviorSubject([]);
  constructor() { }
  // tslint:disable-next-line:typedef
  addToCart(clothes: Clothes) {
    let item: Clothes;
    // tslint:disable-next-line:triple-equals
    item = this._cartList.find((v1) => v1.name == clothes.name);
    if (!item) {
      this._cartList.push({ ...clothes });
    } else {
      item.quantity += clothes.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }


}
