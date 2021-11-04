import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../shared/toastr.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  successToastr(value: string) {
    this.toastr.success(value);
  }

  errorToastr(value: string) {
    this.toastr.error(value);
  }

  infoToastr(value: string) {
    this.toastr.info(value);
  }

  warningToastr(value: string) {
    this.toastr.warning(value);
  }
}
