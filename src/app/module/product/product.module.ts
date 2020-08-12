import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prod1Component } from './prod1/prod1.component';
import { Prod2Component } from './prod2/prod2.component';
import { Prod3Component } from './prod3/prod3.component';
import {PersonaModule} from '../persona-module/persona.module';



@NgModule({
  declarations: [
    Prod1Component,
    Prod2Component,
    Prod3Component
  ],
  imports: [
    CommonModule,
    PersonaModule
  ],
  exports: [
    Prod1Component,
    Prod2Component,
    Prod3Component
  ]
})
export class ProductModule { }
