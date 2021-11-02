import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Output() counterNow = new EventEmitter<number>();

  constructor() {}

  counter = 0;

  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  buttonClicked() {
    this.counterNow.emit(this.counter);
  }
}
