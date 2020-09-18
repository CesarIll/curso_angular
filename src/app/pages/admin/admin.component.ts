import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../shared/services/product.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  products = [];
  productForm: FormGroup;
  // nameControl = new FormControl();
  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private productService: ProductService) {
    this.loadProduct();
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
  loadProduct(): void{
    this.products = [];
    const idUser = this.authService.getUserId();
    this.productGetSubs = this.productService.getProductsById(idUser).subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }
  onDelete(id: any): void {
    this.productDeleteSubs = this.productService.deleteProduct(id).subscribe(res => {
      console.log('Response', res);
      this.loadProduct();
    }, error => console.log('Error'));
  }
  onEdit(product): void {
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }
  onUpdateProduct(): void {
    this.productUpdateSubs = this.productService.updateProduct(
        this.idEdit,
      {
          ...this.productForm.value,
          ownerId: this.authService.getUserId()
        }
      ).subscribe(res => {
        console.log('Response', res);
        this.loadProduct();
      }, error => console.log('Error update en servidor'));
  }
  /*onEnviar(): void {
    console.log('Valor: ', this.nameControl.value);
  }*/
  onEnviar2(): void{
    this.productSubs = this.productService.addProduct({
      ...this.productForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(res => {
      console.log('Respuesta: ', res);
      this.loadProduct();
    }, error => console.log('Error de servidor'));
  }
  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe() : '';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe() : '';
  }

}
