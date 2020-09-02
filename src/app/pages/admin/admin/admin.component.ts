import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  productForm: FormGroup;
  // nameControl = new FormControl();
  constructor(private formBuilder: FormBuilder,
              private productService: ProductService) { }

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
    this.productService.addProduct(this.productForm.value).subscribe(res => {
      console.log('Respuesta: ', res);
    }, error => console.log('Error de servidor'));
  }

}
