import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { ToastrService } from './shared/toastr.service';

@NgModule({
  declarations: [AppComponent, NotificationComponent],
  imports: [BrowserModule],
  providers: [ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
