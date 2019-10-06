import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderBai3Component } from './nav-header-bai3.component';

describe('NavHeaderBai3Component', () => {
  let component: NavHeaderBai3Component;
  let fixture: ComponentFixture<NavHeaderBai3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHeaderBai3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeaderBai3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
