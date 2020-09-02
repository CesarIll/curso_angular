import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get('https://first-angular-project-7b6f5.firebaseio.com/products.json');
  }
  public addProduct(product: any): Observable<any> {
    return this.http.post('https://first-angular-project-7b6f5.firebaseio.com/products.json', product);
  }
}
