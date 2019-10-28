import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkoutlap08Component } from './checkoutlap08.component';

describe('CheckoutComponent', () => {
  let component: Checkoutlap08Component;
  let fixture: ComponentFixture<Checkoutlap08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkoutlap08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkoutlap08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
