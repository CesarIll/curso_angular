import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/Routing/home/home.component';
import {AdminComponent} from './components/Routing/admin/admin.component';
import {AboutComponent} from './components/Routing/about/about.component';
import {Home1Component} from './components/Routing/home1/home1.component';
import {Home2Component} from './components/Routing/home2/home2.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'home1',
        component: Home1Component
      },
      {
        path: 'home2',
        component: Home2Component
      },
    ]
  },
  {path: 'admin', component: AdminComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user', loadChildren: () => import('./module/Routing/user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
