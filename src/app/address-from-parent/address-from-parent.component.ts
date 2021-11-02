import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-from-parent',
  templateUrl: './address-from-parent.component.html',
  styleUrls: ['./address-from-parent.component.scss'],
})
export class AddressFromParentComponent implements OnInit {
  @Input() dataAddress: any;

  constructor() {}

  ngOnInit(): void {}
}
