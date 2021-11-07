import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  event: any;
  reviewed: boolean = false;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.event = this.eventService.getEvent(
      +this.activatedRoute.snapshot.params['eventId']
    );
  }
  toggleReviewed() {
    this.reviewed = !this.reviewed;
    console.log(this.reviewed);
  }
}
