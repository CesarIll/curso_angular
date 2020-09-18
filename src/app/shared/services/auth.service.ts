import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.auth.apiBaseUrl;
  key = environment.auth.key;

  constructor(private http: HttpClient,
              private router: Router) {}
  public login(body: any): Observable<any> {
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body).pipe(
      map((res: any) => {
        this.authSuccess(res.idToken);
        return res;
      })
    );
  }
  private authSuccess(token: string): void {
    localStorage.setItem('auth', token);
  }
  public logout(): void {
    localStorage.removeItem('auth');
    this.router.navigate(['login']);
  }
}
