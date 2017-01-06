import {Component, OnInit, Output, EventEmitter, Injector} from '@angular/core';
import {NotificationService} from "../../../notification.service";

@Component({
  selector: 'hello-world',
  template: `
<div class="background" (click)="closeModal()">  
</div>
<div class="modal">
    <div class="modal-header">World</div>
    <div class="modal-body">Hello {{showNum}}</div>
</div>
`,
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {

  showNum = 0;

  constructor(private injector: Injector, private notification: NotificationService) {
    this.showNum = this.injector.get('showNum');
  }

  public closeModal() {
    this.notification.closePopup.emit('close');
    console.log('background clicked');
  }
}
