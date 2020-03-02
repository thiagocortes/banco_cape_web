import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  message = new EventEmitter();

  constructor() { }

  emitir(type, data) {
    this.message.emit({ type: type, data: data });
  }
}
