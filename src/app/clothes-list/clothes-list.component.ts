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
    },
    {
      name: 'RockStar',
      type: 'Campera de cuero',
      price: 400,
      stock: 3,
      image: '/assets/campera-rock1.jpg',
      clearance: true,
    },
    {
      name: 'PopRock',
      type: 'Cartera de cuero',
      price: 250,
      stock: 0,
      image: '/assets/campera-rock1.jpg',
      clearance: false,
    },
  ] ;
  constructor() { }

  ngOnInit(): void {
  }

}
