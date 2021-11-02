import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  public data = {
    name: 'ngConf 2025',
    date: '3/1/2025',
    time: '8am',
    location: {
      address: '123 Main St',
      city: 'Salt Lake City, UT',
      country: 'USA',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
