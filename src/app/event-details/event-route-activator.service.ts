import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
} from '@angular/router';
import { EventService } from '../shared/event.service';
import { EventDetailsComponent } from './event-details.component';

@Injectable({
  providedIn: 'root',
})
export class EventRouteActivatorService
  implements CanActivate, CanDeactivate<any>
{
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

  canDeactivate(component: EventDetailsComponent) {
    if (!component.reviewed) {
      return window.confirm(
        'You have not reviewed this event, you really want to quit?'
      );
    }

    return true;
  }
}
