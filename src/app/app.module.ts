import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventService } from './shared/event.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, EventsListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [EventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
