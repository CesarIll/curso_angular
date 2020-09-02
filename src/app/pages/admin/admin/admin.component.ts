import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  products = [];
  productForm: FormGroup;
  // nameControl = new FormControl();
  productSubs: Subscription;
  productGetSubs: Subscription;
  constructor(private formBuilder: FormBuilder,
              private productService: ProductService) {
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: '',
      description: ['Description', [Validators.required, Validators.minLength(10)]],
      imageUrl: '',
      ownerId: '',
      price: '',
    });
  }
  /*onEnviar(): void {
    console.log('Valor: ', this.nameControl.value);
  }*/
  onEnviar2(): void{
    console.log('Form group', this.productForm.value);
    this.productSubs = this.productService.addProduct(this.productForm.value).subscribe(res => {
      console.log('Respuesta: ', res);
    }, error => console.log('Error de servidor'));
  }
  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
  }

}
