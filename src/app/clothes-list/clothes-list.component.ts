import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

  clothes = {
    name: 'Rock',
    type: 'Campera de cuero',
    price: 200,
    stock: 5,
    image: '/assets/campera-rock1.jpg'

  };
  constructor() { }

  ngOnInit(): void {
  }

}
