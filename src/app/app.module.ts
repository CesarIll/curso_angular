import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ComponentInputOutputComponent } from './component-input-output/component-input-output.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ComponentInputOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
