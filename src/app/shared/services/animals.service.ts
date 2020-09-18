import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class AnimalsService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAnimals(): Observable<any> {
    return this.http.get(` ${this.url}/pets.json`);
  }
  public addAnimals(product: any): Observable<any> {
    return this.http.post(`${this.url}/pets.json`, product);
  }
  public deleteAnimals(id: any): Observable<any> {
    return this.http.delete(`${this.url}/pets/${id}.json`);
  }
  public updateAnimals(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/pets/${id}.json`, product);
  }
}
