import {Component, OnInit, Injector} from '@angular/core';
import {NotificationService} from "../../../notification.service";

@Component({
  selector: 'app-custom',
  template: `
<div class="background" (click)="closeModal()">  
</div>
<div class="modal">
    <div class="modal-header">{{title}}</div>
    <div class="modal-body">{{body}}</div>
</div>
`,
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {

  private title: string = 'titlu';
  private body: string = 'mesaj';

  constructor(private injector: Injector, private notification: NotificationService) {
    this.title = this.injector.get('title');
    this.body = this.injector.get('body');
  }

  public closeModal() {
    this.notification.closePopup.emit('close');
    console.log('background clicked');
  }

}
