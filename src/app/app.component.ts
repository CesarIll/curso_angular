import { Component, OnInit } from '@angular/core';
import {from, fromEvent} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'curso-angular';
  sw = true;
  personsName = ['Manuel', 'Pepe', 'Persona Genérica 1', 'Persona Genérica 2'];
  switch = 2;
  styleColor = 'red';
  class = true;
  persons = [
    {
      name: 'Cesar',
      lastName: 'Illanes',
      age: 20,
      enabled: true
    }, {
      name: 'Juan',
      lastName: 'Perez',
      age: 21,
      enabled: false
    }, {
      name: 'José',
      lastName: 'José',
      age: 27,
      enabled: true
    }, {
      name: 'Luis',
      lastName: 'Rodriguez',
      age: 28,
      enabled: true
    }
  ];
  base = 3;
  exponent = 2;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  name = 'Cesar';
  lastname = 'Illanes';

  ngOnInit(){
    // const array = from([1, 2, 3, 4, 5, 6]);
    // array.subscribe(s => console.log('item: ',s));

    // const aux = fromEvent(document, 'mousemove');
    // aux.subscribe((s:any) => console.log('Event: ', s.clientX + ', '+ s.clientY));

    console.log('PURA: ', this.pura(126,2));
    console.log('IMPURA: ', this.impura(2, 7));
  }

  // saveClickChild(event){
  //  console.log('Event Child: ', event);
  // }

  // print(event){
  //   console.log('Persona: ', event);
  // }

  pura(a: number, b: number) {
    return a + b;
  }

  impura(a: number, b: number) {
    return a + b + Math.random();
  }
}
