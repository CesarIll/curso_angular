import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ComponentInputOutputComponent } from './component-input-output/component-input-output.component';
import { CiclosDeVidaComponent } from './ciclos-de-vida/ciclos-de-vida.component';
import {FormsModule} from '@angular/forms';
import { SoloTsComponent } from './solo-ts/solo-ts.component';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ComponentInputOutputComponent,
    CiclosDeVidaComponent,
    SoloTsComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
