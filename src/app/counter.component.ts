import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <button (click)="decrease()">-</button> {{counterValue}}<button (click)="increase()">+</button>
    </div>
  `
})
export class CounterComponent {
  counterValue: number;
  @Output('counterChange') counterChange = new EventEmitter();

  constructor() {
    this.counterValue = 0;
  }
  increase() {
    this.counterValue = this.counterValue - 1 + 2;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  decrease() {
    this.counterValue = this.counterValue - 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  @Input('counter')
  set counter(value: number) {
    if ( value ) {
      this.counterValue = value;
    } else {
      this.counterValue = 0;
    }
    this.counterChange.emit(value);
  }

}
