import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StarWarsComponent} from '../components/star-wars/star-wars.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    StarWarsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
