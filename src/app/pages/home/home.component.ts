import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AddProduct} from './store/home.actions';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products = [];
  productSubs: Subscription;

  constructor(private store: Store<any>,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }
  ngOnDestroy(): void {
    this.productSubs.unsubscribe();
  }
  onBuy(product): void {
    this.store.dispatch(AddProduct({product: 'hola'}));
  }
}
