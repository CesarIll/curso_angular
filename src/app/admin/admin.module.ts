import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
/*
import { CartComponent } from './components/cart/cart.component';
import { SideComponent } from './components/side/side.component';
import { HeaderComponent } from './components/header/header.component';
*/
import {RouterModule, Routes} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {AnimalsService} from '../shared/services/animals.service';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {path: '', component: AdminComponent}
];

@NgModule({
  declarations: [AdminComponent/*, CartComponent, SideComponent, HeaderComponent*/],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
  ],
  providers: [
    AnimalsService
  ]
})
export class AdminModule { }
