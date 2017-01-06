/**
 * Created by Radu on 1/6/2017.
 */
import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class NotificationService {
  constructor() {
  }

  public closePopup = new EventEmitter();
}
