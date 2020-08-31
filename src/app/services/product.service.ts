import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  public getProducts(): any[] {
    return [
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
  }
}
