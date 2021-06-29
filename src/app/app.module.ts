import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExSwitchComponent } from './compoent/ex-switch/ex-switch.component';
import { FormsModule } from '@angular/forms';
import { ExFormComponent } from './compoent/ex-form/ex-form.component';


import { ReactiveFormsModule } from '@angular/forms';  


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ExSwitchComponent,
    ExFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
