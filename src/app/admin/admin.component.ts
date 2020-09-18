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
  query: string;
  constructor(private formBuilder: FormBuilder,
              private animalService: AnimalsService,
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
    this.animalGetSubs = this.animalService.getAnimals().subscribe(res => {
      Object.entries(res).map((p: any) => this.animals.push({id: p[0], ...p[1]}));
      this.animalsVaccinated = this.animals.filter(s => (s.vaccinated === 'true' || s.vaccinated === true));
      this.animalsVaccinated = this.animals.filter(s => (s.vaccinated === 'false' || s.vaccinated === false));
      console.log('Vaccinated', this.animalsVaccinated);
      console.log('Not vaccinated', this.animalsNotVaccinated);
    });
  }
  onDeleteAnimal(id: any): void {
    this.animalDeleteSubs = this.animalService.deleteAnimals(id).subscribe(res => {
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
    this.animalUpdateSubs = this.animalService.updateAnimals(this.idEdit, this.animalForm.value).subscribe(res => {
      console.log('Respuesta', res);
      this.loadAnimals();
    }, error => console.log('Error update'));
  }
  onCreateAnimal(): void{
    console.log('Form group', this.animalForm.value);
    this.animalSubs = this.animalService.addAnimals(this.animalForm.value).subscribe(res => {
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
  public searchByName(value): void {
    this.query = value.toLowerCase();
  }
}
