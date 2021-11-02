import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  public stopped = false;
  public counter: number = 0;
  public intervalId!: any;

  constructor() {}

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.stopped = true;
  }
}
