import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ComponentInputOutputComponent } from './component-input-output/component-input-output.component';
import { CiclosDeVidaComponent } from './ciclos-de-vida/ciclos-de-vida.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ComponentInputOutputComponent,
    CiclosDeVidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
