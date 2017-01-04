/**
 * Created by Radu on 1/4/2017.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicLoaderComponent } from './containers/dynamic-loader/dynamic-loader.component';
import { DynamicComponentComponent } from './containers/dynamic-component/dynamic-component.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { WorldHelloComponent } from './components/world-hello/world-hello.component';
import { CustomComponent } from './components/custom/custom.component';

// containers

// components

// services

@NgModule({
  declarations: [
  DynamicLoaderComponent,
  DynamicComponentComponent,
  HelloWorldComponent,
  WorldHelloComponent,
  CustomComponent],
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
