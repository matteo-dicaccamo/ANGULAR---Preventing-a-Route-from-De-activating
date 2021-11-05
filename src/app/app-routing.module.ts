import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { EventRouteActivatorService } from './event-details/event-route-activator.service';

const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  {
    path: 'events/:eventId',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService],
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
