import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng-lts/card';
import { ButtonModule } from "primeng/button";
import { PanelModule } from "primeng/panel";
import { RippleModule } from "primeng/ripple";
import { InputTextModule } from "primeng/inputtext";

import { AppComponent } from './app.component';
import { FundoComponent } from './appfundo.component';
import { PetLoginComponent } from './pet-login/pet-login.component';

@NgModule({
  declarations: [
    FundoComponent,
    AppComponent,
    PetLoginComponent
  ],
  imports: [
    InputTextModule,
    RippleModule,
    ButtonModule,
    PanelModule,
    CardModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
