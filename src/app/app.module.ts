import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventService } from './shared/event.service';
import { AppRoutingModule } from './app-routing.module';
import { EventDetailsComponent } from './event-details/event-details.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { EventRouteActivatorService } from './event-details/event-route-activator.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventDetailsComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [EventService, EventRouteActivatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
