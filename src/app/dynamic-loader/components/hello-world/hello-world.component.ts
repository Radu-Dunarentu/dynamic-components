import {Component, OnInit, Output, EventEmitter, Injector} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
<div class="background" (click)="closeModal()">  
</div>
<div class="modal">
    <div class="modal-header">titlu</div>
    <div class="modal-body">mesaj {{showNum}}</div>
</div>
`,
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {

  showNum = 0;

  constructor(private injector: Injector) {
    this.showNum = this.injector.get('showNum');
  }

  public closeModal() {
    console.log('background clicked');
  }
}
