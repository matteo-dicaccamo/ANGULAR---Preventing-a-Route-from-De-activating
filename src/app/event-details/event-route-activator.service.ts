import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root',
})
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const eventExists = Boolean(
      this.eventService.getEvent(+route.params['eventId'])
    );

    if (!eventExists) {
      this.router.navigate(['/404']);
    }

    return eventExists;
  }
}
