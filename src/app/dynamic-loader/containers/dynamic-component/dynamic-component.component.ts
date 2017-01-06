import {
  Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver,
  ReflectiveInjector, Input, Output, EventEmitter
} from '@angular/core';
import {WorldHelloComponent} from "../../components/world-hello/world-hello.component";
import {HelloWorldComponent} from "../../components/hello-world/hello-world.component";
import {CustomComponent} from "../../components/custom/custom.component";
import {NotificationService} from "../../../notification.service";

@Component({
  selector: 'dynamic-component',
  entryComponents: [HelloWorldComponent, WorldHelloComponent, CustomComponent],
  template: `
    <div #dynamicComponentContainer ></div>
`,
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit{
  currentComponent = null;
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private notification: NotificationService) {  }

  ngOnInit() {
    this.notification.closePopup.subscribe(_ => this.currentComponent.destroy());
  }
  // component: Class for the component you want to create
  // inputs: An object with key/value pairs mapped to input name/input value
  @Input() set componentData(data: {component: any, inputs: any }) {
    if (!data) {
      return;
    }

    // Inputs need to be in the following format to be resolved properly
    let inputProviders = Object.keys(data.inputs).map((inputName) => {return {provide: inputName, useValue: data.inputs[inputName]};});
    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

    // We create an injector out of the data we want to pass down and this components injector
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(data.component);

    // We create the component using the factory and the injector
    let component = factory.create(injector);

    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(component.hostView);

    // Destroy the previously created component
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
  }

}
