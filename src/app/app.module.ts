import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { AddressFromParentComponent } from './address-from-parent/address-from-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    AddressFromParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
