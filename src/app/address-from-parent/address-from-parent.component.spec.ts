import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFromParentComponent } from './address-from-parent.component';

describe('AddressFromParentComponent', () => {
  let component: AddressFromParentComponent;
  let fixture: ComponentFixture<AddressFromParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressFromParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFromParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
