import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ComponentInputOutputComponent } from './components/component-input-output/component-input-output.component';
import { CiclosDeVidaComponent } from './components/ciclos-de-vida/ciclos-de-vida.component';
import {FormsModule} from '@angular/forms';
import { SoloTsComponent } from './components/solo-ts/solo-ts.component';
import {PersonaModule} from './module/persona-module/persona.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ComponentInputOutputComponent,
    CiclosDeVidaComponent,
    SoloTsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
