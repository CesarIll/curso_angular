import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [
    {
      name: 'Salteña',
      description: 'Salteña de carne',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerID: 1,
      price: 20
    },
    {
      name: 'Salteña',
      description: 'Salteña de pollo',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerID: 1,
      price: 20
    },
    {
      name: 'Salteña',
      description: 'Salteña de fricasé',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerID: 1,
      price: 20
    },
    {
      name: 'Salteña',
      description: 'Salteña de pizza',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerID: 1,
      price: 20
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
