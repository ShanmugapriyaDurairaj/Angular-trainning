import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExSwitchComponent } from './compoent/ex-switch/ex-switch.component';
import { FormsModule } from '@angular/forms';
import { ExFormComponent } from './compoent/ex-form/ex-form.component';


import { ReactiveFormsModule } from '@angular/forms';
import { ExPipesComponent } from './compoent/ex-pipes/ex-pipes.component';
import { ExCustomPipesComponent } from './compoent/ex-custom-pipes/ex-custom-pipes.component';
import { ExCustomPipesPipe } from './pipes/ex-custom-pipes.pipe';
import { MultiplierPipe } from './pipes/multiplier.pipe';
import { MyserviceService } from './services/myservice.service';
import {LoggerService} from './services/logger.service';
import {HttpClientModule} from '@angular/common/http';

import {ApiService} from './services/api.service'
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ExSwitchComponent,
    ExFormComponent,
    ExPipesComponent,
    ExCustomPipesComponent,
    ExCustomPipesPipe,
    MultiplierPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MyserviceService,LoggerService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
