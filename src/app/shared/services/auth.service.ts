import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.auth.apiBaseUrl;
  key = environment.auth.key;

  constructor(private http: HttpClient) {}
  public login(body: any): Observable<any> {
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body).pipe(
      map((res: any) => {
        this.authSuccess(res.idToken, res.localId);
        return res;
      })
    );
  }
  private authSuccess(token: string, userId: string): void {
    localStorage.setItem('auth', token);
    localStorage.setItem('userId', userId);
  }
  public getToken(): string{
    return localStorage.getItem('token');
  }
  public getUserId(): string{
    return localStorage.getItem('userId');
  }
  public verifyLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    // this.router.navigate(['login']);
  }
}
