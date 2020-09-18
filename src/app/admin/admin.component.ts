import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AnimalsService} from '../shared/services/animals.service';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  animals = [];
  animalsVaccinated = [];
  animalsNotVaccinated = [];
  animalForm: FormGroup;
  animalSubs: Subscription;
  animalGetSubs: Subscription;
  animalDeleteSubs: Subscription;
  animalUpdateSubs: Subscription;
  idEdit: any;
  constructor(private formBuilder: FormBuilder,
              private productService: AnimalsService,
              private authService: AuthService) {}
  ngOnInit(): void {
    this.animalForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      color: '',
      age: '',
      vaccinated: ['', [Validators.required]],
      urlImage: '',
    });
    this.loadAnimals();
  }
  loadAnimals(): void{
    this.animals = [];
    this.animalGetSubs = this.productService.getAnimals().subscribe(res => {
      Object.entries(res).map((p: any) => this.animals.push({id: p[0], ...p[1]}));
    });
    this.animalsVaccinated = [];
    this.animalsNotVaccinated = [];
    this.animalsVaccinated.push(this.animals.filter(animal => animal.value.vaccinated === true));
    this.animalsNotVaccinated.push(this.animals.filter(animal =>  animal.value.vaccinated === false));
    console.log('Animales', this.animals);
    console.log('Animales vacunados', this.animalsVaccinated);
    console.log('Animales no vacunados', this.animalsNotVaccinated);
  }
  onDeleteAnimal(id: any): void {
    this.animalDeleteSubs = this.productService.deleteAnimals(id).subscribe(res => {
      console.log('Respuesta', res);
      this.loadAnimals();
    }, error => console.log('Error delete'));
  }
  onEdit(product): void {
    this.idEdit = product.id;
    this.animalForm.patchValue(product);
  }
  onUpdateAnimal(): void {
    console.log('Valor Animal', this.animalForm.value);
    this.animalUpdateSubs = this.productService.updateAnimals(this.idEdit, this.animalForm.value).subscribe(res => {
      console.log('Respuesta', res);
      this.loadAnimals();
    }, error => console.log('Error update'));
  }
  onCreateAnimal(): void{
    console.log('Form group', this.animalForm.value);
    this.animalSubs = this.productService.addAnimals(this.animalForm.value).subscribe(res => {
      console.log('Respuesta: ', res);
      this.loadAnimals();
    }, error => console.log('Error add'));
  }
  onLogout(): void {
    this.authService.logout();
  }
  ngOnDestroy(): void {
    this.animalSubs ? this.animalSubs.unsubscribe() : '';
    this.animalGetSubs ? this.animalGetSubs.unsubscribe() : '';
    this.animalUpdateSubs ? this.animalUpdateSubs.unsubscribe() : '';
    this.animalDeleteSubs ? this.animalDeleteSubs.unsubscribe() : '';
  }

}
