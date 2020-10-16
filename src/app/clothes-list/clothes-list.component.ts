import { Component, OnInit } from '@angular/core';
import { Clothes } from './Clothes';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

  clothingItems: Clothes [] = [
    {
      name: 'Rock',
      type: 'Campera de cuero',
      price: 200,
      stock: 5,
      image: '/assets/campera-rock1.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'RockStar',
      type: 'Campera de cuero',
      price: 400,
      stock: 3,
      image: '/assets/campera-rock1.jpg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'PopRock',
      type: 'Cartera de cuero',
      price: 250,
      stock: 0,
      image: '/assets/campera-rock1.jpg',
      clearance: false,
      quantity: 0,
    },
  ] ;
  constructor() { }

  ngOnInit(): void {
  }
  upQuantity(clothes: Clothes): void{
    if (clothes.quantity < clothes.stock){
      clothes.quantity ++;
    }
  }
  downQuantity(clothes: Clothes): void{
    if (clothes.quantity > 0) {
    clothes.quantity --;
    }
 }

changeQuantity(event, clothes: Clothes): void{
console.log(event.target);
}
}
