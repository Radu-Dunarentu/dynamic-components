import {Component, OnInit, Injector} from '@angular/core';
import {NotificationService} from "../../../notification.service";

@Component({
  selector: 'app-world-hello',
  template:`
<div class="background" (click)="closeModal()">  
</div>
<div class="modal">
    <div class="modal-header">Hello</div>
    <div class="modal-body">World {{showNum}}</div>
</div>
`,
  styleUrls: ['./world-hello.component.css']
})
export class WorldHelloComponent implements OnInit {
  showNum: number = 0;

  constructor(private injector: Injector,
              private notification: NotificationService) {
    this.showNum = this.injector.get('showNum');
  }

  ngOnInit() {
  }

  public closeModal() {
    this.notification.closePopup.emit('close');
    console.log('background clicked');
  }

}
