import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ComponentInputOutputComponent } from './components/component-input-output/component-input-output.component';
import { CiclosDeVidaComponent } from './components/ciclos-de-vida/ciclos-de-vida.component';
import {FormsModule} from '@angular/forms';
import { SoloTsComponent } from './components/solo-ts/solo-ts.component';
import {PersonaModule} from './module/persona-module/persona.module';
import {ProductModule} from './module/product/product.module';
import {AdminModule} from './module/admin/admin.module';
import {UserModule} from './module/user/user.module';
import { TestPipe } from './pipes/test.pipe';
import { ExpoPipe } from './pipes/expo.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { NgColorDirective } from './directives/ng-color.directive';
import { GetSetInputComponent } from './components/get-set-input/get-set-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ComponentInputOutputComponent,
    CiclosDeVidaComponent,
    SoloTsComponent,
    TestPipe,
    ExpoPipe,
    PurePipe,
    ImpurePipe,
    NgColorDirective,
    GetSetInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule,
    ProductModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
