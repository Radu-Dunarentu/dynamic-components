/**
 * Created by Radu on 1/4/2017.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicLoaderComponent } from './containers/dynamic-loader/dynamic-loader.component';

// containers

// components

// services

@NgModule({
  declarations: [
  DynamicLoaderComponent],
  imports: [
    CommonModule
  ],
  providers: [

  ],
  exports: [
    DynamicLoaderComponent
  ]
})
export class DynamicLoaderModule {}
