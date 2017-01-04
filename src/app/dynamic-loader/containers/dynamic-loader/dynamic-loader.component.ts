import { Component, OnInit } from '@angular/core';
import {WorldHelloComponent} from "../../components/world-hello/world-hello.component";
import {HelloWorldComponent} from "../../components/hello-world/hello-world.component";

@Component({
  selector: 'dynamic-loader',
  template: `
    <div>
      <h2>Lets dynamically create some components!</h2>
      <button (click)="createHelloWorldComponent()">Create Hello World</button>
      <button (click)="createWorldHelloComponent()">Create World Hello</button>
    </div>
    <dynamic-component [componentData]="componentData"></dynamic-component>
`,
  styleUrls: ['./dynamic-loader.component.css']
})
export class DynamicLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  componentData = null;

  createHelloWorldComponent(){
    this.componentData = {
      component: HelloWorldComponent,
      inputs: {
        showNum: 9
      }
    };
  }

  createWorldHelloComponent(){
    this.componentData = {
      component: WorldHelloComponent,
      inputs: {
        showNum: 2
      }
    };
  }

}
