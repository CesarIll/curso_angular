import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AnimalsService {

  constructor(private http: HttpClient) { }

  public getAnimals(): Observable<any> {
    return this.http.get('https://veterinary-test.firebaseio.com/pets.json');
  }
  public addAnimals(animal: any): Observable<any> {
    return this.http.post('https://veterinary-test.firebaseio.com/pets.json', animal);
  }
  public deleteAnimals(id: any): Observable<any> {
    return this.http.delete(`https://veterinary-test.firebaseio.com/pets/${id}.json`);
  }
  public updateAnimals(id: any, animal: any): Observable<any> {
    return this.http.put(`https://veterinary-test.firebaseio.com/pets/${id}.json`, animal);
  }
}
