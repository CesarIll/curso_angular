import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  sw = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log('Username: ', this.username);
    console.log('Password: ', this.password);
  }

  onLogin2(form): void {
    console.log('Variable local form: ', form.value);
    this.router.navigate(['pages']);
  }

}
