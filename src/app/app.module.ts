import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsService } from './shared/events.service';

@NgModule({
  declarations: [AppComponent, EventsListComponent],
  imports: [BrowserModule],
  providers: [EventsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
