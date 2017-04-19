import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app component';
  ComponentCounterValue  = 0;
  handleCounterChange(value) {
    this.ComponentCounterValue = value;
  }
}
