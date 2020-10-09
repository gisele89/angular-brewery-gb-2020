import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beer = {
    "name": "Samurai",
    "type": "Apa",
    "price": 200,
    "stock": 5,
    "image": "/assets/samurai.png"

  };
  constructor() { }

  ngOnInit(): void {
  }

}
