import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
<div class="background" (click)="closeModal()">
  <div class="modal">
    <div class="modal-header">titlu</div>
    <div class="modal-body">mesaj</div>
</div>
</div>
`,
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  @Output() destroy =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public closeModal() {
    console.log('background clicked');
    this.destroy.emit('destroy');
  }
}
