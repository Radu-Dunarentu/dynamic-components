import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DynamicLoaderModule} from "./dynamic-loader/dynamic-loader.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DynamicLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
