import { Component, OnInit } from '@angular/core';
import {WorldHelloComponent} from "../../components/world-hello/world-hello.component";
import {HelloWorldComponent} from "../../components/hello-world/hello-world.component";
import {CustomComponent} from "../../components/custom/custom.component";

@Component({
  selector: 'dynamic-loader',
  template: `
    <div >
      <h2>Lets dynamically create some components!</h2>
      <button (click)="createHelloWorldComponent()">Create Hello World</button>
      <button (click)="createWorldHelloComponent()">Create World Hello</button>
      <button (click)="toggle = !toggle">Create Custom Component</button>
      <div class="customComponent" *ngIf="toggle">
        <label for="title">Insert Title</label>
        <div class="cici"><input  type="text" name="customTitle" #customTitle></div>
        <label for="customBody">Insert Body</label>
        <div class="cici"><input type="text" name="customBody" #customBody></div>
        <button (click)="createCustomComponent(customTitle, customBody)">Create</button>
      </div>
    </div>
    <dynamic-component [componentData]="componentData"></dynamic-component>
`,
  styleUrls: ['./dynamic-loader.component.css']
})
export class DynamicLoaderComponent implements OnInit {
  public toggle: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  componentData = null;

  createCustomComponent(title, body) {
    this.componentData = {
      component: CustomComponent,
      inputs: {
        title: title.value,
        body: body.value
      }
    };
    title.value = null;
    body.value = null;
  }

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
